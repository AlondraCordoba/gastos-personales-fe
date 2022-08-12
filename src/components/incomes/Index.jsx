import React, { useEffect, useState } from "react";
import { Data } from "../../context/data-context";
import axios from 'axios';

function Index() {
  const [info, setInfo] = useState([]);
  const id = localStorage.getItem("ID");
  const data = Data();
  const model = {
    id: '',
    name: '',
    monto: '',
    idUser: localStorage.getItem("ID"),
    type: 'income'
  }

  useEffect(() => {
    getCategory();
  }, [data]);
  
  const getCategory = () => {
    axios.get(process.env.REACT_APP_MONGO + '/categorias-gastos').then((info) => {
      if(info.data){
          for(let i=0; i<info.data.length; i++){
              if(info.data[i].userId == id){
                  for(let f=0; f<info.data[i].categorias_por_usuario.length; f++){
                      if(info.data[i].categorias_por_usuario[f].idUser == id){                            
                          setInfo(info.data[i].categorias_por_usuario);                                
                      }
                  }
              } 
          }
      }  
    });
  }

  const postCategory = () => {
    axios.post(process.env.REACT_APP_MONGO + '/post-category', model).then((result) => {
      getCategory();
    });
  }

  const putCategory = () => {
    axios.put(process.env.REACT_APP_MONGO + '/put-category', model).then((result) => {
      getCategory();
    });
  }

  const deleteCategory = (id) => {
    axios.delete(process.env.REACT_APP_MONGO + `/delete-category/${id}`).then((result) => {
      getCategory();
      console.log(result);
    });
  }

  return(
    <div>
      <div style={{display: 'flex'}}>
        {
          info.length > 0 && info.map((result, index) => (
            result && result.type == "income" ? (
              <div key={index} style={{height: '220px', background: 'gray', width: '200px', color: 'white'}}>
                {result.name}<br/>
                {result.monto}<br/>
                <input style={{color: 'black'}} onChange={(e) => {model.name = e.target.value}} placeholder="Descripcion"/><br/>
                <input style={{color: 'black'}} onChange={(e) => {model.monto = e.target.value}} placeholder="Monto"/><br/>
                <button onClick={() => {model.id = result._id; putCategory()}}>Editar</button>
                <button onClick={() => {deleteCategory(result._id)}}>Eliminar</button>
              </div>
            ): null
          ))
        }
      </div>
      <hr style={{margin: '5% 1% 5% 1%'}}/>
      <div className="agregar">
          <input onChange={(e) => {model.name = e.target.value}} placeholder="Descripcion"/>
          <input onChange={(e) => {model.monto = e.target.value}} placeholder="Monto"/>
          <button onClick={() => postCategory()}>Agregar</button>
      </div>
    </div>
  )
}

  
export default Index;