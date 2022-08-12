import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

const DataContext = React.createContext({
    data: [],
    setData: () => [], 
});

export function DataProvider(props) {
    const [data, setData] = useState([]);
    const id = localStorage.getItem("ID");
    // const { data, setData } = useContext(DataContext);
    const result = React.useMemo(() => ({
        data, setData
    }), [data]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_MONGO + '/categorias-gastos').then((info) => {
            if(info.data){
                for(let i=0; i<info.data.length; i++){
                    if(info.data[i].userId == id){
                        for(let f=0; f<info.data[i].categorias_por_usuario.length; f++){
                            if(info.data[i].categorias_por_usuario[f].idUser == id){                            
                                setData(info.data[i].categorias_por_usuario);                                
                            }
                        }
                    } 
                }
            }  
        });
    }, []);

    return (
        <DataContext.Provider value={result} {...props} />
    )
}

export function Data() {
    const datos = useContext(DataContext);
    return datos;
}