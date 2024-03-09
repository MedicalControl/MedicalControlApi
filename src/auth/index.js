import jwtoken from "jsonwebtoken"

import {jwtSK} from '../config/config.js'

const secret = jwtSK;

export  default function AsingToken(data){
    return jwtoken.sign(data, secret)
}