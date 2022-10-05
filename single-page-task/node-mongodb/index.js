const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const cors =require('cors')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


mongoose.connect("mongodb+srv://ulfat:ulfat_2000@cluster0.6zfwwey.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });


//DB TABLE
const productSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
})


const Product = mongoose.model('Product', productSchema);




app.post('/products',
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var product = new Product({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email:req.body.email
    });

    product.save();
    res.send('Success!!');

  })


app.get('/products', (req, res) => {
  let columns = req.query.columns;
  let limit = req.query.limit;
  let skip = req.query.skip;

  let select = '';

  if (columns) {
    let columnsArray = columns.split(',');

    columnsArray.forEach(element => {
      select = element + ' ' + select;
    });
  }


  // GETALL
  Product.find({}, (err, docs) => {

      if (!err) {
          res.json(docs)
      }
      else {
          res.status(500).json(err);
      }

  })
})


app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, doc) => {
    if (!err) {
      if (doc)
        res.json(doc);
      else
        res.status(404).json({ "message": "Not found!" })
    }
    else {
      res.status(500).json(err)
    }
  })

})

app.delete('/products/:id', (req, res) => {

  let id = req.params.id;

  Product.findByIdAndDelete(id, (err) => {
    if (!err)
      res.json({ 'messagae': 'Success!' })
    else
      res.status(500).json(err)
  })

})


// app.put('/products/:id', (req, res) => {

//   let id = req.params.id;
//   Product.findByIdAndUpdate(id, req.body, (err, doc) => {
//     if (!err) {
//       res.json({ 'message': 'success' });
//     }
//     else {
//       res.status(500).json(err);
//     }
//   })

// })


app.listen(8080, () => {
  console.log('Server is running!!');
})