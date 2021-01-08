const axios = require('axios')
const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
require('dotenv').config();

const isHuman = async token => {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`)
    return response.data.success
}

const sendEmail = async (req, res) => {
    try {
        const { name, email, subject, message, token } = req.body

        //Use Recaptcha to verify user is human
        const human = await isHuman(token)
        if (!human)
            return res.status(400).json({ error: 'Sorry, I cannot verify that you are not a bot' })

        const auth = {
            auth: {
                apiKey: process.env.MAILGUN_API_KEY,
                domain: process.env.MAILGUN_SANDBOX
            }
        }
        const transporter = nodemailer.createTransport(mailGun(auth))
        const output = `
            <h3>${subject}</h3>
            <p>${message}</p>
            <br>
            <p>From: ${name}</p>
            `
        const mailOptions = {
            from: email,
            to: process.env.MAILGUN_RECEIVER,
            subject: 'Foothill Consultant Contact',
            html: output
        }
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) console.log(err)
            else res.json({ msg: 'Message Sent' })
        })
    } catch (err) {
        console.error('err: ' + err.message)
        return res.status(500).send('Server Error')
    }
}

module.exports = { sendEmail }