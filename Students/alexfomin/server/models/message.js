const mong = require('mongoose')
const Schema = mong.Schema

const messageSchema = new Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
    messageId: { type: String, required: true, default: Date.now()},
    chatId: { type: String, required: true },
})

module.exports = mong.model('message', messageSchema)