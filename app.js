import express from 'express'
import { db } from './config/database.js'

const app = express()

db.authenticate()
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Unable to connect to database", err))

app.listen('3000' || process.env.PORT, () => {
    console.log("Server is running...")
})