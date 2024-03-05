import { cn } from "@/lib/utils.ts"
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area.tsx"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx"
import { Link } from "react-router-dom";
import { Icons } from "@/components/icons.tsx"

/*const components: { title: string; href: string; description: string }[] = [
    {
        title: "Action",
        href: "/show/category/action",
        description:
            "Fast-paced and intense, featuring heroic characters in thrilling situations.",
    },
    {
        title: "Adventure",
        href: "/show/category/adventure",
        description:
            "Explores the unknown, with characters venturing into new challenges.",
    },
    {
        title: "Animation",
        href: "/show/category/animation",
        description:
            "Features animated characters, offering a unique blend of artistry and storytelling.",
    },
    {
        title: "Comedy",
        href: "/show/category/comedy",
        description:
            "Focuses on humor, often using satire to entertain and make viewers laugh.",
    },
    {
        title: "Crime",
        href: "/show/category/crime",
        description:
            "Centers on criminal activities, exploring themes of justice, morality, and the law.",
    },
    {
        title: "Drama",
        href: "/show/category/drama",
        description:
            "Emotional and serious, often exploring complex characters and their relationships.",
    },
    {
        title: "Fantasy",
        href: "/show/category/fantasy",
        description:
            "Blends elements of reality with magical or supernatural phenomena.",
    },
    {
        title: "Horror",
        href: "/show/category/horror",
        description:
            "Focuses on terror and suspense, often involving elements of the supernatural or the macabre.",
    },
    {
        title: "Mystery",
        href: "/show/category/mystery",
        description:
            "Involves solving a puzzle or uncovering a secret, with suspense and intrigue at its core.",
    },
    {
        title: "Romance",
        href: "/show/category/romance",
        description:
            "Explores love and relationships, often with a focus on emotional depth and connection.",
    },
    {
        title: "Sci-Fi",
        href: "/show/category/sci-fi",
        description:
            "Explores imaginative and futuristic concepts, often involving advanced technology or otherworldly elements.",
    },
    {
        title: "Thriller",
        href: "/show/category/thriller",
        description:
            "Engaging and suspenseful, often involving a plot that keeps the audience on edge.",
    },
]*/

const categories = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"];

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

export function MainNav({
                            className,
                            ...props
                        }: React.HTMLAttributes<HTMLElement>) {

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3 h-[256px]">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/explore"
                                        >
                                            <Icons.compass className="h-6 w-6"/>
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Explore
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Dynamic and interactive gateway for you to discover new movies
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/show/latest" title="Latest">
                                    Recent additions, featuring the most recent cinematic releases
                                </ListItem>
                                <ListItem href="/show/popular" title="Popular">
                                    Most watched and highly rated movies at the moment
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {/*<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[360px] ">*/}
                            <ul className="grid gap-3 p-6 h-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ScrollArea>
                                    <div className="p-1">
                                        {/*<h4 className="mb-4 text-sm italic font-medium leading-none">Scroll to see more</h4>*/}
                                        {categories.map((category) => (
                                            <>
                                                <Link to={"/show/category/" + category.toLowerCase()}>
                                                    <ListItem key={category} title={category} />
                                                </Link>
                                            </>
                                        ))}
                                    </div>
                                </ScrollArea>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/show/category/all"
                                        >
                                            <Icons.chartpie className="h-6 w-6"/>
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Categories
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Predefined section that organizes movies based on genres
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/show/search">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Search
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}