import express, { request, response } from "express";
import { PORT } from "./config.js";

const app = express();



app.get("/",(request, response)=>{
    console.log(response.statusCode);
    return response.send("Hey Girl!!")
})

app.listen(PORT,()=>{
    console.log(`App is listening to ${PORT}`);
    
})
