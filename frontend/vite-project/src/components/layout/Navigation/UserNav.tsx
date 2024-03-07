import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx"
import { Button } from "@/components/ui/button.tsx"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    // DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx"
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "@/utilities/getLocalStorageItem.ts";
import { useEffect, useState } from "react";
import { Icons } from "@/components/icons.tsx";
import { useQueryClient } from "@tanstack/react-query";

export function UserNav() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const userToken: string | null = getLocalStorageItem('userData');
        if (userToken != null) {
            const user = JSON.parse(userToken);
            setUserName(user.userName);
            setEmail(user.email);
        }
    }, []);

    const signOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userData');
        queryClient.removeQueries();
        navigate('/');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="avatar.png" />
                        <AvatarFallback>{userName.substring(0, 1).toUpperCase()}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{userName}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link to={'/user/manage'}>
                        <DropdownMenuItem>
                            <div className="flex items-center">
                                <Icons.wrench className="h-4 w-4" />
                                <p className="ml-1">Manage</p>
                            </div>
                            {/*<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                    <DropdownMenuItem className="font-bold text-destructive" onClick={signOut}>
                        <div className="flex items-center">
                            <Icons.signout className="h-4 w-4" />
                            <p className="ml-1">Sign out</p>
                        </div>
                        {/*<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
