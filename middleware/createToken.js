import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

dotenv.config()

export const createToken = (user, res, statusCode) => {
    const token = jwt.sign({ id: user.id }, process.env.PRIVATEKEY)

    res.cookie('Bearer', token, {
        httpOnly: true,
        secure: true
    })

    if (statusCode === 200) {
         res.status(statusCode).json({
            status: "Success",
            message: "Login successful"
        })
    } else {
        res.status(statusCode).json({
            status: "Success",
            message: "Signup successful",
            email: user.email
        })
    }
}

// verify user using token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.Bearer;

    const decoded = jwt.verify(token, process.env.PRIVATEKEY, (err, acc) => {
        if (err) {
            res.status(401).json({
                status: "Failed",
                message: "User is not logged in"
            })
        }

        req.user = acc;
        next()
    })
}