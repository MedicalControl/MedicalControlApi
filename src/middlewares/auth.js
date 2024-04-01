import Jwt, { decode } from "jsonwebtoken";
import { jwtSK } from '../config/config.js'

export const auth = (req, res, next) => {
    if (!req.headers.authorization)
        res.status(401).json({ msg: "Access denied" })
    else {
        let token = req.headers.authorization.split(" ")[1];
        Jwt.verify(token, jwtSK, (err, decode) => {
            if (err)
                res.status(500).json({ msg: "Problem has ocurred", err: err })
            else {
                console.log(decode);
                next();
            }
        })
    }
};