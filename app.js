import express from 'express'
import { db } from './config/database.js'
import { authRouter } from './router/authRouter.js'
import { smsRouter } from './router/smsRouter.js'
import { Message } from './model/messages.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/history', async (req, res) => {
    const message = await Message.findAll()
    res.render('history', { data: message })
})

app.use('/api/auth', authRouter)
app.use('/api', smsRouter)

app.listen('3000' || process.env.PORT, () => {
    console.log("Server is running...")
})