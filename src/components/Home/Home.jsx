import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
  const [info, setInfo] = useState([]);
  const getCategories = () => {
    axios.get(process.env.REACT_APP_MONGO + '/categorias-gastos').then((result) => {
      setInfo(result.data[0].categorias_por_usuario);
    });
  }

  useEffect(() => {
    getCategories();
  }, []);

  return(
    <div className="homePage">
      <h1>Bienvenido</h1>
      {
        info && info.map((c, i) => (
          <h1 key={i}>{c.name}</h1>
        ))
      }
    </div>
  ) 
}

export default Home;
