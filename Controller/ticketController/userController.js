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
        if (!getUser) return res.status(404).json({
            UserFlag: false,
            message: 'Login Denided'
        })
        res.status(200).json({
            data: getUser,
            UserFlag: true,
            message: 'Login Successful'

        })
    } catch (err) {
        res.status(500).json({
            UserFlag: true,
            message: 'Login Failed'
        })
    }
}


export const checkUser = async (req, res) => {
    const { user_id, user_password } = req.body;
    console.log(req.body, req.params.id);
    try {
        const getUser = await User.find({ user_id: req.params.id })
        console.log(getUser);

        if (!getUser) return res.status(404).json({ userFlag: false, message: 'User not found' })
        if (user_id == getUser[0].user_id) {
            if (user_password == getUser[0].user_password) {
                res.status(200).json({ userFlag: true, message: 'Login Successful' })
            } else {
                res.status(200).json({ userFlag: false, message: 'User Id or Password Incorrect' })
            }
        } else {
            res.status(404).json({ userFlag: false, message: 'User not found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
