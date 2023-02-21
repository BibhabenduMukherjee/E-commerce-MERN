
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
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

// getting items with the id
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});