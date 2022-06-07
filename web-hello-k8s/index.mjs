import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const helloMessage = `Hello from the ${os.hostname()}<hr/><br>`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log(`Webserver is listening at port ${PORT}`)
})
