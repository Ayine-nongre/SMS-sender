import AfricasTalking from 'africastalking'
import dotenv from 'dotenv'

dotenv.config()

export const africasTalking = AfricasTalking({
    username: process.env.USERNA,
    apiKey: process.env.APIKEY
})