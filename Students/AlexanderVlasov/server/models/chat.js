const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    title: { type: String, required: true },
    chatId: { type: mongoose.Types.ObjectId, required: true },
});

chatSchema.pre('validate', function(next) {
    this.chatId = this._id;
    next();
})

module.exports = mongoose.model('chat', chatSchema);