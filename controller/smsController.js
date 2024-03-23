import { response } from "express"
import { africasTalking } from "../config/sms.js"
import { Message } from "../model/messages.js"
import { randomUUID } from "crypto"

export const bulkSMS = async (req, res) => {
    const { receiver, content } = req.body
    
    const recipients = receiver.split(/,\s|,/)

    const sms = africasTalking.SMS

    await sms
    .send({
        to: recipients,
        message: content,
        enqueue: true
    })
    .then((response) => response.SMSMessageData)
    .then((response) => {
        for (let i = 0; i < response.Recipients.length; i++){
            Message.create({
                recipient: response.Recipients[i].number,
                content: content,
                status: response.Recipients[i].status,
                //sender_id: randomUUID()
            })
        }

        res.json({ status: "Success" })
    })
    .catch(err => {
        console.log(err)
        res.json({ status: "Failed" })
    })
}