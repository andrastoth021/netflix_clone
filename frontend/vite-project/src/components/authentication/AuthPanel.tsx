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

export function AuthPanel() {
    return (
        <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Sign up</TabsTrigger>
                <TabsTrigger value="password">Log in</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
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
                            <Input id="password" placeholder="YourPassword" type={"password"} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Sign Up!</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="password">
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
                        <Button>Sign In!</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
