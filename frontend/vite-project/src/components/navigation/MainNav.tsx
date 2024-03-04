import { cn } from "@/lib/utils"
import React from "react";

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <a
                href="/content/explore"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Explore
            </a>
            <a
                href="/content/categories"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Categories
            </a>
            <a
                href="/content/search"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Search
            </a>
        </nav>
    )
}