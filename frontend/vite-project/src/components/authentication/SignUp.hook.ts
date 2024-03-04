import React from "react";
import axios from "axios";
// import { axiosConfig } from "@/config/axios.config.ts";
import { toast } from "sonner";
import { getAndFormatFormData } from "@/utilities/getAndFormatFormData";

export const useSignUp = () => {
    let email: string = "example@example.com";

    const successfulToast = () => {
        toast("Successful registration!", {
            description: `You can now sign in with the following email address: ${email}`,
            action: {
                label: "Close",
                onClick: () => console.log("Toast closed"),
            },
        })
    }
    const notSuccessfulToast = (err: string) => {
        toast("Something went wrong!", {
            description: `${err}`,
            action: {
                label: "Close",
                onClick: () => console.log("Toast closed"),
            },
        })
    }
    const unknownErrorToast = () => {
        toast("Something went wrong!", {
            action: {
                label: "Close",
                onClick: () => console.log("Toast closed"),
            },
        })
    }

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        const payload = getAndFormatFormData(event.target);
        email = payload.email;

        try {
            const data = await axios.post('/api/user/register', {
                email: payload.email,
                username: payload.username,
                password: payload.password,
                passwordRepeat: payload.passwordRepeat
            });
            console.log(data);
            successfulToast();
        } catch (error) {
            let errorMessage: string;
            if (axios.isAxiosError(error)) {
                // Handle Axios error
                errorMessage = error.message;
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of  2xx
                    errorMessage = error.response.data;
                } else if (error.request) {
                    // The request was made but no response was received
                    errorMessage = error.request.responseText;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    errorMessage = error.message;
                }
                notSuccessfulToast(errorMessage);
            } else {
                // Handle other types of errors
                console.error(error);
                unknownErrorToast();
            }
        }
    }

    return {
        handleSignUp,
    }
};

