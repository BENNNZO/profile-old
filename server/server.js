require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.static(path.join(__dirname, '/build')))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/email', async (req, res) => {
    let { text, first, last, phone, email, subject } = req.body

    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASS
        }
    })

    const mailOptions = {
        from: process.env.APP_EMAIL,
        to: 'benjamin.phillips.webdev@gmail.com',
        subject: subject,
        html: `
            <div style="padding: 10px 20px; border: 2px solid black; border-radius: 10px;">
                <h1>Contact Info: </h1>
                <h4>Name: ${first}, ${last}</h4>
                <h4>Email: ${email}</h4>
                <h4>Phone: ${phone}</h4>
            </div>
            <h2 style="padding: 10px 20px; border: 2px solid black; border-radius: 10px">
                ${text}
            </h2>
        `
    }

    transport.sendMail(mailOptions)
        .then(res => {
            console.log("Email successfully sent.")
            res.json(res)
        })
        .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})