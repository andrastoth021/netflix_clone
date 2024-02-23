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

export const AuthPanel = () => {

    return (
        <>
            <Tabs defaultValue="signup">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                    <TabsTrigger value="login">Log in</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
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
                                <Input id="email" placeholder="example@example.com" type={"email"}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="YourUsername"/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="YourPassword" type={"password"}/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Sign Up!</Button>
                        </CardFooter>
                    </Card>
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
                                <Input id="email" placeholder="example@example.com" type={"email"}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="YourPassword" type={"password"}/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Log In!</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
            <p className="px-8 text-center text-sm text-muted-foreground">
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
