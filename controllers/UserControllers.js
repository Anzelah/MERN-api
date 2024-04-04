const User = require('../models/UserModels')
const asyncHandler = require('express-async-handler')
const { Types } = require('mongoose')
const jwt = require('jsonwebtoken')


// generate the token
const loginUser = asyncHandler( async(req, res) => {
    try{
        jwt.sign({ User }, 'secretkey', { expiresIn: '7 days' }, (err, token) => {
            console.log(token)
            res.json({ token })
        })
    } catch (error) {
        throw new Error(error.message)
    }
})

module.exports = loginUser;
