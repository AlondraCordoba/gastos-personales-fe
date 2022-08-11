import axios from "axios";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const cookies = new Cookies();

function Auth() {
    const token = cookies.get("TOKEN");
    useEffect(() => {
        auth()
    }, []);
    
    const auth = () => {
        axios.get(process.env.REACT_APP_AUTH + 'auth', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(data => {
            window.location.href = "/home";
        }).catch((error) => {
            MySwal.fire({
                title: <strong>Datos incorrectos</strong>,
                html: <i>Error: {error.response.data}</i>,
                icon: 'warning',    
            });
        });
    }

    return (
        <>
            {
                token ? (
                    <h1>Bienvenido</h1>
                    ): (
                    <h1>Error</h1>
                )
            }
        </>
    )
}

export default Auth;