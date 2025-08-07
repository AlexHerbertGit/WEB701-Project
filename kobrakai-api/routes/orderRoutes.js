// Order Routes

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// BASE PATH: /api/orders
router.post('/', orderController.placeOrder);
router.get('/', orderController.getAllOrders);
router.get('/user/:userId', orderController.getOrderByUser);
router.put('/:id', orderController.updateOrderStatus);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;