import User from '../../Model/userModel.js'

export const createUser = async (req, res) => {
    const { user_id, user_name, user_type, user_zone, user_team } = req.body;
    console.log(req.body);
    try {
        const addUser = new User({
            user_id,
            user_name,
            user_type,
            user_password: '12345',
            user_zone,
            user_team
        })
        await addUser.save()
        res.status(200).json({
            data: addUser,
            message: 'User created successfully'
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
export const getAllUser = async (req, res) => {
    try {
        const getUser = await User.find({})
        if (!getUser) return res.status(404).json({ message: 'User not found' })
        res.status(200).json({ data: getUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const getUser = await User.find({ user_id: req.params.id })
        if (!getUser) return res.status(404).json({ message: 'User not found' })
        res.status(200).json({ data: getUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
