const express = require('express')
const mong = require('mongoose')
const router = require('./routes/messages_controllers')

const app = express()

mong.connect('mongodb://127.0.0.1:27017/reactgram-v2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log('DB connected') })
    .catch(() => { console.log('DB offline') })

app.use(express.json())
app.use(router)

app.listen(3300, () => {
    console.log("Server listen on port 3300")
})