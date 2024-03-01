import jwtoken from "jsonwebtoken"

import {jwt} from '../config/config.js'

const secret = jwt;

export  default function AsingToken(data){
    return jwtoken.sign(data, secret)
}