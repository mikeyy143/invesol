
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const colors = ["#A8DADC","#FFDDD2","#E2F0CB","#FFD6A5"];

export default function Dashboard(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/analytics`)
      .then(res=>res.json())
      .then(d=>setData(d.categories));
  },[]);

  return(
    <div style={{padding:40}}>
      <h2>Invesol Dashboard</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value">
          {data.map((_,i)=>(<Cell key={i} fill={colors[i%colors.length]}/>))}
        </Pie>
        <Tooltip/>
      </PieChart>
    </div>
  );
}
