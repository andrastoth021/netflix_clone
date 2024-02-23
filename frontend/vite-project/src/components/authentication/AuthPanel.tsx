import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { axiosConfig } from "@/config/axios.config.ts";
import axios from "axios";
import { Button } from "@/components/ui/button.tsx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs.tsx"
import { toast } from "sonner";

export const AuthPanel = () => {
    const [formDataSignUp, setFormDataSignUp] = useState({
        email: '',
        username: '',
        password: '',
    });

    const successfulToast = () => {
        toast("Successful registration!", {
            description: `You can now sign in with the following email address: ${formDataSignUp.email}`,
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormDataSignUp((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const data = await axios.post('/api/user/register', {
                email: formDataSignUp.email,
                username: formDataSignUp.username,
                password: formDataSignUp.password
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

    return (
        <>
            <Tabs defaultValue="signup">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                    <TabsTrigger value="login">Log in</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <form onSubmit={handleSignUp}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Create a new account</CardTitle>
                                <CardDescription>
                                    To get started, please create your account. It's quick and easy.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email"
                                       name={"email"}
                                       type={"email"}
                                       value={formDataSignUp.email}
                                       onChange={handleInputChange}
                                       placeholder="example@example.com"
                                       required={true}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username"
                                       name={"username"}
                                       type={"username"}
                                       value={formDataSignUp.username}
                                       onChange={handleInputChange}
                                       placeholder="YourUsername"
                                       required={true}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password"
                                        name={"password"}
                                        type={"password"}
                                        value={formDataSignUp.password}
                                        onChange={handleInputChange}
                                        placeholder="YourPassword"
                                        required={true}
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type={"submit"}>Sign Up!</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign into your account</CardTitle>
                            <CardDescription>
                                Please sign in to continue right where you left off.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="example@example.com" type={"email"} required={true} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="YourPassword" type={"password"} required={true} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type={"submit"}>Log In!</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
            <p className="px-8 mt-2 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                    to="/terms-of-service"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    to="/privacy-policy"
                    className="underline underline-offset-4 hover:text-primary"
                >
                    Privacy Policy
                </Link>
                .
            </p>
        </>
    )
}
