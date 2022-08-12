import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { login } from "../../reducers/accions/auth";
const cookies = new Cookies();
const MySwal = withReactContent(Swal);

export default function Login() {
  const dispatch = useDispatch();
  useEffect(() => {
    cookies.remove("TOKEN");
  }, []);

  const model = {
    email: "",
    password: "",
  };

  const loginHome = () => {
    model.email === "" && model.password === ""
      ? MySwal.fire({
          title: (
            <strong>Ingrese su correo y contrasenia para continuar</strong>
          ),
          // html: <i>Error: {error.response.data}</i>,
          icon: "warning",
        })
      : axios
          .post(process.env.REACT_APP_MONGO + "/login", model)
          .then((data) => {
            cookies.set("TOKEN", data.data.token, {
              path: "/",
            });
            MySwal.fire({
              title: <strong>Datos correctos!</strong>,
              html: <i>Bienvenido: {data.data.email}</i>,
              icon: "success",
            }).then((redirect) => {
              // dispatch(login(data.data.id));
              window.location.href = "/home";
            });
          })
          .catch((error) => {
            MySwal.fire({
              title: <strong>Datos incorrectos</strong>,
              html: <i>Error: {error.response.data}</i>,
              icon: "warning",
            });
          });
  };

  const register = () => {
    window.location.href = "/register";
  };

  return (
    <div>
      <div className="context">
        <div>
        <div className="coin silver"></div>
        <br />
          <input
            placeholder="user@email.com"
            className="email"
            type="email"
            autoComplete="false"
            onChange={(e) => (model.email = e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            className="password"
            onChange={(e) => (model.password = e.target.value)}
          />
          {/*<button onClick={(e) => loginHome()}>Login</button>
             <button onClick={() => {setArray((current) => ({...current, like: !likepost}))}}>Ingresar</button> */}
          <div className="multi-button">
          <br />
            <button className="outer-left" onClick={(e) => loginHome()}>
              Login
            </button>
            <button className="outer-right" onClick={(e) => register()}>
              Registro
            </button>
          </div>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { TransitionGroup } from 'react-transition-group';
// import { Collapse } from '@mui/material';
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

// const modelCategory = {
//   name: ''
// }

// const modelGasto = {
//   name: '',
//   money: '',
//   category: ''
// }

// function Login() {
//   const [elements, setElements] = useState([]);
//   const [lista, setLista] = useState([]);

//   useEffect(() => {
//     getElements();
//   }, []);

//   const getElements = () => {
//     axios.get(process.env.REACT_APP_MONGO + '/categorias').then(data => {
//       setElements(data.data);
//       console.log(data);
//     });
//   }

//   const crearCategoria = () => {
//     axios.post(process.env.REACT_APP_MONGO + '/post-category', modelCategory).then(data => {
//       console.log(data.data);
//       getElements();
//     });
//   }

//   const crearGasto = () => {
//     axios.post(process.env.REACT_APP_MONGO + '/post-gasto', modelGasto).then(data => {
//       console.log(data.data);
//       getElements();
//     });
//   }

//   const listaElementos = (index) => {
//       setLista(elements[index].gastos_por_categoria);
//       // console.log(elements[index].gastos_por_categoria);
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Crear categoria</h1>
//         <input type="text" placeholder='Ingresar nombre' onChange={(e) => {modelCategory.name = e.target.value}}/>
//         <button onClick={() => crearCategoria()}>Crear</button>
//       </div>

//       <div>
//         <h1>Crear gasto</h1>
//         <input type="text" placeholder='Ingresar nombre' onChange={(e) => modelGasto.name = e.target.value}/>
//         <input type="text" placeholder='Ingresar cantidad' onChange={(e) => modelGasto.money = e.target.value}/>
//         <select onChange={(e) => {modelGasto.category = e.target.value; console.log(modelGasto)}}>
//           <option value="">Seleccionar categoria categoria</option>
//           {
//             elements && elements.map((data, index) => (
//               <option key={index} value={data.name}>{data.name}</option>
//             ))
//           }
//         </select>
//         <button onClick={() => crearGasto()}>Crear</button>
//       </div>
//       <div style={{display: 'flex'}}>
//         <TransitionGroup className='card-conteiner'>
//           {
//             elements && elements.map((data, index) => (
//                 <Collapse key={index}>
//                   <div style={{background: 'gray', height: '150px', width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>{data.name}</div>
//                 </Collapse>
//             ))
//           }
//         </TransitionGroup>
//           {/* {
//             lista && lista.map((data, index) => (
//             ))
//           } */}
//       </div>

//     </div>
//   );
// }

// export default Login;
