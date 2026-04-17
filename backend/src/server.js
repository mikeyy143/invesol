
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.send("API LIVE"));

app.get("/api/user/analytics", (req,res)=>{
  res.json({
    categories:[
      {name:"Food", value:4000},
      {name:"Transport", value:1500},
      {name:"Shopping", value:3000}
    ],
    summary:{
      income:60000,
      expense:20000,
      savings:40000,
      investable:25000
    },
    risk:6
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=>console.log("Server running"));
