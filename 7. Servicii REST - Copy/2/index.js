"use strict";
// npm run dev
const express = require("express");
const { departments } = require("./db");
const {router,status} = require("./routes/departamente");
require("dotenv").config();

const app = express();

app.use('/api',router)
app.use('/api2',status)

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
});
