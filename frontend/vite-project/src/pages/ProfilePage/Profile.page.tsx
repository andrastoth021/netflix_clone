import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import {
    Profile,
    Settings,
} from '@/components/profile';
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
    const [sideBarPage, setSideBarPage] = useState('profile');

    return (
        <>
            <div className="hidden space-y-6 p-10 pb-16 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Manage</h2>
                    <p className="text-muted-foreground">
                        Manage your account settings.
                    </p>
                </div>
                <Separator className="my-2"/>
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <nav className={cn(
                        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
                            )}
                        >
                            <a
                                key={'profile'}
                                onClick={() => setSideBarPage('profile')}
                                className={cn(
                                    buttonVariants({variant: "ghost"}),
                                    sideBarPage === 'profile'
                                        ? "bg-muted hover:bg-muted"
                                        : "hover:bg-transparent hover:underline",
                                    "justify-start hover:cursor-pointer"
                                )}
                            >
                                Profile
                            </a>
                            <a
                                key={'Settings'}
                                onClick={() => setSideBarPage('settings')}
                                className={cn(
                                    buttonVariants({variant: "ghost"}),
                                    sideBarPage === 'settings'
                                        ? "bg-muted hover:bg-muted"
                                        : "hover:bg-transparent hover:underline",
                                    "justify-start hover:cursor-pointer"
                                )}
                            >
                                Settings
                            </a>
                        </nav>
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">
                        {(() => {
                            if (sideBarPage === 'profile') {
                                return <Profile />;
                            }
                            else if (sideBarPage === 'settings') {
                                return <Settings />;
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    );
}

