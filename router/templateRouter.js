import express from 'express'
import { createTemplate } from '../controller/templateController.js'
import { verifyToken } from '../middleware/createToken.js'

export const templateRouter = express.Router()

templateRouter.post('/new_template', verifyToken, createTemplate)