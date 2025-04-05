const express = require('express');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const { createAOrder, getOrderByEmail ,getAllOrders} = require('./order.controller');

const router =  express.Router();

// create order endpoint
router.post("/", createAOrder);

// get orders by user email 
router.get("/email/:email", getOrderByEmail);

//get all order ids
router.get("/allorders",getAllOrders);

module.exports = router;