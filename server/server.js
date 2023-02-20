
import express from "express";
const app = express();
import dotenv from "dotenv";
import data from "./data.js";
import cors from "cors"
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const port = process.env.PORT || 4000;

app.get("/api/products" , (req , res)=>{
    
    res.send(data.products)
})

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});