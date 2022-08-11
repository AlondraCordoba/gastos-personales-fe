import React, { useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Home() {
    useEffect(() => {
        const token = cookies.get("TOKEN");
        if(!token){
            window.location.href = "/";
        }
    }, [cookies]);

    return(
        <>
            <h1>Bienvenido</h1>
            <button onClick={() => {
                cookies.remove("TOKEN", { path: "/" });
                window.location.href = "/";
            }
            }>Logout</button>
        </>
    )
}