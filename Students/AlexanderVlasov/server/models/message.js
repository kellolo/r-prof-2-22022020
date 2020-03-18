const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true },
    messageId: { type: mongoose.Types.ObjectId, required: true },
    chatId: { type: mongoose.Types.ObjectId, ref: 'chat' },
});

messageSchema.pre('validate', function(next) {
    this.messageId = this._id;
    this.date = new Date();
    next();
})

module.exports = mongoose.model('message', messageSchema);