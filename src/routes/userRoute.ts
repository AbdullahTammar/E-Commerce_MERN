// End Point Placle 

import express, { response } from "express";
import { login, register } from "../services/userService";


const router = express.Router();

router.post('/register' ,async (requset , response) => {
    const { firstName, lastName, email, password} = requset.body;
    const {statusCode , data} = await register({firstName, lastName , email , password});
    response.status(statusCode).send(data)
});

router.post('/login' , async (requset , response) => {
    const {email , password} = requset.body;
    const { statusCode , data } = await login({email , password})
    response.status(statusCode).send(data)


})

export default router ; 