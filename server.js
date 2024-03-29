const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

mongoose.connect('mongodb+srv://admin:Angelica87@subscriberapi.rlg8ubn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SubscriberAPI')
.then(() => {
    console.log('Connected to MongoDB Database...')
    app.listen(port, () => {
    console.log(`Node API application listening on port: ${port}`)
    })
}).catch((err) => console.log(err))