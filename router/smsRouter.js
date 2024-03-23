import express from 'express'
import { bulkSMS } from '../controller/smsController.js'

export const smsRouter = express.Router()

smsRouter.post('/bulksms', bulkSMS)