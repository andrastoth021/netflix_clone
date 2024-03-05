import { Outlet } from 'react-router-dom';
import Navbar from "@/components/layout/Navigation";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;
