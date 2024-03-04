import React from "react";
import { getAndFormatFormData } from "@/utilities/getAndFormatFormData.ts";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useLogIn = () => {
    const navigate = useNavigate();

    const successfulToast = () => {
        // Welcome back! You've successfully logged in. Enjoy your session!
        toast("Welcome back!", {
            description: `You've successfully logged in. Have a good time!`,
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

    const handleLogIn = async (event: React.FormEvent) => {
        event.preventDefault();
        const payload = getAndFormatFormData(event.target);

        try {
            const { data } = await axios.post('/api/user/signin', {
                email: payload.email,
                password: payload.password
            });
            window.localStorage.setItem('token', data.jwt);
            successfulToast();
            navigate('/landing-page');
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
        handleLogIn
    }
}