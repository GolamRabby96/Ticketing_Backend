import ticket from '../../Model/ticketModel.js';

export const createTicket = async (req, res) => {
    const {
        ticket_name,
        phone_number,
        ticket_email,
        ticket_issue,
        address,
        team,
        ticket_zone,
        ticket_priority,
        watched,
        ticket_status,
        createdBy
    } = req.body;

    let number = Math.random() * 1000000;
    let floorNumber = Math.floor(number);

    try {
        const addTicket = new ticket({
            ticket_id: floorNumber,
            ticket_name,
            phone_number,
            ticket_email,
            ticket_issue,
            address,
            team,
            ticket_zone,
            ticket_priority,
            watched,
            ticket_status,
            createdBy
        });
        await addTicket.save();
        res.status(200).json({
            data: addTicket,
            message: 'Ticket created successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getAllTicket = async (req, res) => {
    try {
        const getTicket = await ticket.find({}); //ticket_status: 'open' 
        if (!getTicket) return res.status(404).json({ message: 'Ticket not found' })
        res.status(200).json({
            data: getTicket,
            message: "Data returned",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getTicketById = async (req, res) => {
    try {
        const getTicket = await ticket.find({ _id: req.params.id });
        if (!getTicket) return res.status(404).json({ message: 'Ticket not found' })
        res.status(200).json({
            data: getTicket,
            message: "Data returned",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
export const getClosedTicketById = async (req, res) => {
    console.log(req.params.id)
    try {
        const getTicket = await ticket.findOneAndUpdate({ _id: req.params.id }, { $set: { ticket_status: 'closed' } });
        if (!getTicket) return res.status(404).json({ message: 'Ticket not found' })

        res.status(200).json({
            data: getTicket,
            message: "Data returned",
        })


    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getUpdateById = async (req, res) => {
    const id = { _id: req.params.id };
    try {
        const getTicket = await ticket.find({ _id: req.params.id });
        const updateTicket = getTicket[0].watched.find((c) => c == req.body);
        if (updateTicket == null || updateTicket === undefined || updateTicket == '') {
            let newTicket = getTicket[0].watched.push(req.body[0]);
            const propertyUpdate = await ticket.findOneAndUpdate(id, getTicket[0], {
                new: true,
            });
            res.status(200).json({
                message: "Data updated",
            })

        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getTicketByZone = async (req, res) => {
    try {
        const getTicket = await ticket.find({ ticket_zone: req.params.name });
        if (!getTicket) return res.status(404).json({ message: 'Ticket not found' })
        res.status(200).json({
            data: getTicket,
            message: "Data returned",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export const searchTicket = async (req, res) => {
    try {
        const collect = req.params.name;
        const regex = new RegExp(collect, "i");

        const findTicket = await ticket.find({ ticket_name: regex, ticket_status: 'open' });
        res.status(200).json({
            data: findTicket,
            message: "ticket found",
        });
    } catch (err) {
        res.status(500).json({
            err: "properties not found something went wrong...",
        });
    }
};


export const getAllClosedTicket = async (req, res) => {
    try {
        const getTicket = await ticket.find({ ticket_status: 'closed' });
        if (!getTicket) return res.status(404).json({ message: 'Ticket not found' })
        res.status(200).json({
            data: getTicket,
            message: "Data returned",
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}