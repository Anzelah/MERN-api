const express = require('express')
const loginUser = require('../controllers/UserControllers')

const router = express.Router()

router.post('/', loginUser)

module.exports = router;