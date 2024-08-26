import mongoose from "mongoose";

const contact_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    mailid: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', contact_schema);

export default Data