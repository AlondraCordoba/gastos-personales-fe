import React, { useEffect, useState } from "react";
// import { Data } from "../../context/data-context";
import AnyChart from 'anychart-react';
import { Data } from "../../context/data-context";

function Home(props) {
  const datos = localStorage.getItem('array');
  const info = datos.split(',');

  return (
    <div className="homePage">
        {
          info && (
            <AnyChart
              type="line"
              width={700}
              height={500}
              data={info}
              title="Total de gastos e ingresos"
            />
          )
        }
    </div>
  ); 
}

export default Home;