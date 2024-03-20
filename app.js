import express from 'express'
import { db } from './config/database.js'
import { authRouter } from './router/authRouter.js'

const app = express()

app.use(express.json())

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.use('/api/auth', authRouter)

app.listen('3000' || process.env.PORT, () => {
    console.log("Server is running...")
})