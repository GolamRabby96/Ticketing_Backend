import Message from "../../Model/messageModel.js";

export const createMessage = async (req, res) => {
    const { user_name, ticket_id, comment, comment_image } = req.body;
    try {
        const addMessage = new Message({ user_name, ticket_id, comment, comment_image });
        await addMessage.save();
        res.status(200).json({
            data: addMessage,
            message: "successfully added message",
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

export const getMessage = async (req, res) => {
    try {
        const getMessage = await Message.find({ ticket_id: req.params.id }).sort({ _id: -1 })
        if (!getMessage) return res.status(404).json({ message: 'No ticket found' });
        res.status(200).json({
            data: getMessage,
            message: 'data received'
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}