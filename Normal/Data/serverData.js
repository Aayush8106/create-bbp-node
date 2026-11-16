export const serverData = `import dotenv from 'dotenv';
import express from 'express';

const app=express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1> Hey There! </h1>");    
});

app.listen(PORT , ()=>{
   console.log("Server is Live at Port: " , PORT); 
});`;