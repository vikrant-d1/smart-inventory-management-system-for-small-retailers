const express = require("express");
const router = express.Router();
const authRoute = require("./auth");
const storeRoute = require("./store");
const productRoute = require("./product");
const purchaseRoute = require("./purchase");
const salesRoute = require("./sales");


router.use("/auth", authRoute);
router.use("/store", storeRoute);
router.use("/product", productRoute);
router.use("/purchase", purchaseRoute);
router.use("/sales", salesRoute);



module.exports = router;

