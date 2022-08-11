import axios from "axios";
import React from "react";

export default function Register() {

    const model = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const register = () => {
        axios.post(process.env.REACT_APP_MONGO + '/register', model).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error.response.data);
        });
    }

    return (
        <div className="center">
            <div>
                <input autoComplete="false" placeholder="Email" type="email" onChange={(e) => model.email = e.target.value} /><br></br>
                <input placeholder="Password" type="password" onChange={(e) => model.password = e.target.value} /><br></br>
                <input placeholder="Confirm password" type="password" onChange={(e) => model.confirmPassword = e.target.value} /><br></br>
                <button onClick={(e) => register()}>Register</button>
                {/* <button onClick={() => {setArray((current) => ({...current, like: !likepost}))}}>Ingresar</button> */}
            </div>
        </div>
    )
}