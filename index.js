const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
//Connect to Databse

mongoose.connect(process.env.DB_CONNECT,
{ useUnifiedTopology: true, useNewUrlParser: true },()=>console.log("connected to db"))

// Import Routes

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")



//Midleware

app.use(express.json());


// Routes Middlewares

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);


app.listen(3000, ()=> console.log("Up and running"));