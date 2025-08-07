// Order Controller

const Order = require('../models/orderModel');

// CREATE
exports.placeOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const saved = await order.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

// READ - All Orders (Charity Member Use Case)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        .populate('meal', 'title')
        .populate('beneficiary', 'name');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ - Orders by Beneficiary
exports.getOrderByUser = async (req, res) => {
    try {
        const orders = await Order.find({ beneficiray: req.params.userId })
        .populate('meal', 'title');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE - Mark as Delivered / Cancelled
exports.updateOrderStatus = async (req, res) => {
    try {
        const updated = await Order.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true}
        );
        update ? res.json(updated) : res.status(404).json({ message: 'Order not found.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE - Cancel Order
exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.json({ message: 'Order Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};