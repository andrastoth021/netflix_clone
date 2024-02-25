import { Link } from "react-router-dom";
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
import { useSignUp } from "./SignUp.hook.ts";

export const AuthPanel = () => {
    const { handleSignUp } = useSignUp();

    return (
        <>
            <Tabs defaultValue="signup">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                    <TabsTrigger value="login">Log in</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <form onSubmit={(e) => handleSignUp(e)}>
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
                                           placeholder="example@example.com"
                                           required={true}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username"
                                           name={"username"}
                                           type={"username"}
                                           placeholder="YourUsername"
                                           required={true}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password"
                                           name={"password"}
                                           type={"password"}
                                           placeholder="YourPassword"
                                           required={true}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="passwordRepeat">Confirm password</Label>
                                    <Input id="passwordRepeat"
                                           name={"passwordRepeat"}
                                           type={"password"}
                                           placeholder="YourPasswordAgain"
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
