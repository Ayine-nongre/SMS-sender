import { Template } from "../model/templates.js"

export const createTemplate = async (req, res) => {
    const { contacts, name, content } = req.body

    await Template.create({
        name: name,
        content: content,
        recipients: contacts,
        author_id: req.user.id
    })
    .then((response) => res.redirect('/templates'))
    .catch((err) => console.log(err))
}