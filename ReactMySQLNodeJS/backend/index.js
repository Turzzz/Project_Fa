import express from "express"
import mysql from "mysql"

const app = express() 

const db = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "MySQL123@",
     database : "company"

})


app.get("/", (req,res)=>{
    res.json("Hello this is the backend!")
})



app.get("/companies", (req, res) => {
    const q = "SELECT * FROM companies";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });


  app.post("/compaines", (req, res) => {
    const q = "INSERT INTO compaines(`name`, `type`, `mobile_no`, `logo`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.type,
      req.body.mobile_no,
      req.body.logo,
    ];
   
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });



app.listen(8800, ()=>{
    console.log("Connect Backend") 
})