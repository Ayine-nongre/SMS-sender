import express from 'express'
import cookieParser from 'cookie-parser'
import { db } from './config/database.js'
import { authRouter } from './router/authRouter.js'
import { smsRouter } from './router/smsRouter.js'
import { Message } from './model/messages.js'
import { templateRouter } from './router/templateRouter.js'
import { Template } from './model/templates.js'
import { verifyToken } from './middleware/createToken.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))
app.set('view engine', 'ejs')

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/authenticate', (req, res) => {
    res.render('login')
})

app.get('/send', verifyToken, (req, res) => {
    res.render('send')
})

app.get('/history', verifyToken, async (req, res) => {
    const message = await Message.find({ where: { sender_id: req.user.id }})
    res.render('history', { data: message })
})

app.get('/templates', verifyToken, async (req, res) => {
    const template = await Template.find({ where: { sender_id: req.user.id }})
    res.render('templates', { data: template })
})

app.use('/api/auth', authRouter)
app.use('/api', smsRouter)
app.use('/api', templateRouter)

app.listen('3000' || process.env.PORT, () => {
    console.log("Server is running...")
})