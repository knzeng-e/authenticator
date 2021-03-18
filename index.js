const express = require('express');
const app = express()

const PORT = process.env.PORT || 4242

app.get('/', (req, res) => {
    console.log('Nw request done to the server ==> ', req)
    res.send("Hello Backend World")
})

app.listen(PORT, () => {
    console.log(`Server is listenning on poryt ${PORT}`)
})