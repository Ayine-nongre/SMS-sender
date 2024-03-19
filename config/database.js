import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

export const db = new Sequelize(
    'smsDB',
    process.env.DB_USER,
    process.env.DB_PASSWD,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)