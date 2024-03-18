import { MainNav } from "./MainNav.tsx";
import { UserNav } from "./UserNav.tsx";

const Navbar = () => {


    return (
        <>
            <div className="flex-col flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        <MainNav /*className="mx-6"*/ />
                        <div className="ml-auto flex items-center space-x-4">
                            <UserNav />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;