import User from '../models/userSchema.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        if(!user || user.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json({ user });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    if(!name || name.trim() === "" || !email || email.trim() === "" || !password || password.trim() === "" || password.length < 6 ) {
        return res.status(422).json({ message: 'Invalid inputs' });
    }
    try {
        const user = await User.create({
            name,
            email,
            password
        });
        if(!user) {
            return res.status(500).json({ message: 'User creation failed' });
        }
        return res.status(201).json({ user });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    if(!name || name.trim() === "" || !email || email.trim() === "" || !password || password.trim() === "" || password.length < 6 ) {
        return res.status(422).json({ message: 'Invalid inputs' });
    }
    try {
        const user = await User.findByIdAndUpdate(id, {
            name,
            email,
            password
        }, { new: true });
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const delUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}