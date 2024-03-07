import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileSkeleton from './profile.loading.tsx';
import { useForm } from "react-hook-form";
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert";
import {AlertCircle} from "lucide-react";

interface ProfileData {
    email: string,
    registrationDate: Date,
    username: string,
}

export default function ProfileComponent() {
    const form = useForm({ mode: "onChange" })
    const { data, isLoading, isError, error } =
        useQuery<ProfileData>({
            queryKey: ['profile'],
            queryFn: async () => {
                const { data } = await axiosConfigWithAuth.get('/api/user/me');
                console.log(data.registrationDate);
                return data;
            }
        });

    if (isLoading) return <> <ProfileSkeleton /> </>;
    if (isError) {
        console.log(error)
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className={'text-xl'}>Failed to load content!</AlertTitle>
                <AlertDescription className={"text-l"}>
                    <p>More detail:</p>
                    <p>{error.message}</p>
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>
                        Registered at: {data && data.registrationDate.toString()}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                {/*<AvatarImage src="/avatars/01.png"/>*/}
                                <AvatarFallback>{data && data.username.substring(0, 1).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">{data && data.username}</p>
                                <p className="text-sm text-muted-foreground">{data && data.email}</p>
                            </div>
                        </div>
                    </div>
                    <Separator/>
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} defaultValue={data && data.email} disabled={true}/>
                                        </FormControl>
                                        <FormDescription>
                                            You cannot change your email since it's your unique identifier.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem className={'mt-6'}>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} defaultValue={data && data.username} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Update profile</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
}
