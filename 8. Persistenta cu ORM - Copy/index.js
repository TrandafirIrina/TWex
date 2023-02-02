"use strict";
const express = require('express')
const sequelize = require("./sequelize")
require("./models/employee")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/api", require("./routes/employee"))

app.use((err, req, res, next)=>{
    res.status(500).json({error:"Something broke!"});
})

app.set("port", process.env.PORT || 7000);
app.listen(app.get("port"), async()=>{
    console.log("Server started on http://localhost:7000")
    try{
        await sequelize.authenticate();
        console.log("Connection has been established succesfully")
    }catch(err){
        console.error("Unable to connect to the database", error);
    }
})

// https://www.sqlite.org/download.html