// User Controller

const User = require('../models/userModel');

//CREATE
exports.registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//READ
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user ? res.json(user) : res.status(404).json({ message: 'User not found '});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//UPDATE
exports.updateUser = async (req, res) => {
    try {
        const updated = await User.findUserByIdAndUpdate(req.params.id, req.body, { new: true });
        updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//DELETE
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};