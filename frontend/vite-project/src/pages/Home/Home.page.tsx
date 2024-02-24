import { AuthPanel } from "@/components/authentication/AuthPanel.tsx";

const Home = () => {
    return (
        <>
            <div className="container relative h-[720px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-authWall bg-no-repeat bg-cover bg-center"/>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        Netflix clone
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                Embark on a Cinematic Adventure: Discover, Stream, Enjoy - Your Gateway to the Global Cinema
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="pt-6 lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Hi there, welcome back! &#128640;</h1>
                            <p className="text-sm text-muted-foreground">
                                Dive into the world of movies! Explore a great library and have fun discovering trending & upcoming releases!
                            </p>
                        </div>
                        <AuthPanel />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
