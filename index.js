const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Roster')
})

app.listen(port, () => {
    console.log(`port: ${port}`)
})
