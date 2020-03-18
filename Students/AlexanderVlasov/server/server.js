const express = require('express');
const mongoose = require('mongoose');

const Models = require('./models');

mongoose.connect('mongodb://localhost/reactgramm-v2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {console.log('DB connected')})
.catch((err) => console.log(err.reason));

const server = express();

server.use(express.json());

server.post('/message', async (req, res) => {
    let messaage = new Models.Message(req.body);
    messaage = await messaage.save();
    res.json(messaage);
})
server.get('/messages', async (req, res) => {
    const messages = await Models.Message.find();
    setTimeout(() => {
        res.json(messages);
    }, 2000)
})
server.get('/chats', async (req, res) => {
    const chats = await Models.Chat.find();
    setTimeout(() => {
        res.json(chats);
    }, 2000)
})
server.post('/chat', async (req, res) => {
    console.log(req.body);
    let chat = new Models.Chat(req.body);
    chat = await chat.save();
    res.json(chat);
})
server.delete('/chat/:id', async (req, res) => {
    let chat = await Models.Chat.findByIdAndRemove(req.params.id);
    let messages = await Models.Message.deleteMany({ chatId: req.params.id })
    res.json({chatId: req.params.id, chat, messages});
})

server.listen(3300, () => {
    console.log('server starts on http://localhost:3000/')
})