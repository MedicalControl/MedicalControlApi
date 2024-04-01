import jwtoken from "jsonwebtoken"

import {jwtSK} from '../config/config.js'

const secret = jwtSK;

export  default function AssignToken(data){
    console.log(data);
    return jwtoken.sign(data, secret)
}