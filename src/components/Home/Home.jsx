import React, { useEffect, useState } from "react";
import { Data } from "../../context/data-context";


function Home(props) {
  const [info, setInfo] = useState([]);
  const data = Data();


  return(
    <div className="homePage">
      {
        data && data.data.map((c, i) => (
          <h1 key={i}>{c.name}</h1>
        ))
      }
    </div>
  ) 
}

export default Home;
