import { useEffect, useState } from "react";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import Navbar from "@/components/navigation/Navbar.tsx";

const LandingPage = () => {
    const [welcome, setWelcome] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosConfigWithAuth.get('/api/user/me');
            setWelcome(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <h1>Landing Page</h1>
            <h3>{welcome}!</h3>
        </>
    )
};

export default LandingPage;
