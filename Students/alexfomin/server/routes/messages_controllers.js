const express = require('express');
const router = express.Router();

const Message = require('../models/message')

router.get('/messages', async (req, res) => {

} )

router.post('/message', async (req, res) => {
    console.log(req.params, req.body)
} )

module.exports = router