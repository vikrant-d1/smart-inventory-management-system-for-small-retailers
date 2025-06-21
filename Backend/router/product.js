const express = require("express");
const app = express();
const productController = require("../controller/product");
const { sendSuccess, sendError } = require("../utils/response");
const { userAuth }  = require('../middlewares/userAuth');

// Add Product
app.post("/add", userAuth, (req, res)=>{
    const {name, manufacturer, description} = req.body;
    const userId = req.user[0]._id;
    productController.addProduct({name,manufacturer,description,userId}).then(resData=>{
    sendSuccess(res,{},"Product added Successfully",201);
  }).catch(err=>{
     sendError(res,err,err?.message,400)
  })
});

// Get All Products
app.get("/get/:userId", userAuth,(req, res)=>{

productController.getAllProducts
});

// Delete Selected Product Item
app.get("/delete/:id", userAuth,(req, res)=>{

productController.deleteSelectedProduct
});

// Update Selected Product
app.post("/update", userAuth,(req, res)=>{

productController.updateSelectedProduct
});

// Search Product
app.get("/search", userAuth, (req, res)=>{

productController.searchProduct
});


module.exports = app;
