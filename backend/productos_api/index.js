const express = require("express")
const cors = require("cors")
const uri = 'mongodb+srv://carlosflores:mongodbcf@cluster0.rzotvjb.mongodb.net'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
app.use( cors() )
const port = 8081
const { productoModel } = require('./models');

app.get('/', (req, res) => { res.send("Registrando productoo!!"); })

app.get('/producto', async(req, res)=>{
  const producto = await productoModel.find({});
  res.json( producto );
});
app.get('/producto/:id', async(req, res)=>{
  const producto = await productoModel.find({id:req.params.id});
  try {
    res.json( producto[0] );
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/producto', async(req, res)=>{
  try {
    const {id, name,description, price} = req.body;

    const producto = new productoModel({ name, id, description, price});
    const data = await producto.save();
    return res.status(201).json(data);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Usuario no Registrado' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

