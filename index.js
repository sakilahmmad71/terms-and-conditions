const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const port = 8000

app.listen(port, () => console.log('Term and Conditions running on port 8000.'))