import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function ProfileSkeleton() {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                    Registered at: ...
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
            </CardContent>
            <Separator/>
            <div className="flex items-center space-x-4 p-6">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[50px]"/>
                    <Skeleton className="h-6 w-[500px]"/>
                </div>
            </div>
            <div className="flex items-center space-x-4 p-6">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[50px]"/>
                    <Skeleton className="h-6 w-[500px]"/>
                </div>
            </div>
            <div className="flex items-center space-x-4 p-6">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[100px]"/>
                </div>
            </div>
        </Card>
    )
}
