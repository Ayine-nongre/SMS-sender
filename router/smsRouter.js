import express from 'express'
import { bulkSMS } from '../controller/smsController.js'
import { verifyToken } from '../middleware/createToken.js'

export const smsRouter = express.Router()

smsRouter.post('/bulksms', verifyToken, bulkSMS)