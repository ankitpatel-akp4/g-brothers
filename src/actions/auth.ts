"use server"
import { db } from "@/lib/db"
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
import { time } from "console"
import { convertFormDataToObject } from "@/utils"
import bcrypt from 'bcrypt'
import {Prisma} from '@prisma/client'

const saltRounds = 10;
export const registerUser = async (data: any) => {
    
    const plainPass = data.password
    const foundUser: object | null = await db.user.findUnique({
        where: {
            email: data.email,
        }})
    
    if(foundUser)
        return {isError:true, message: data.email+" is in use." };
        
    data.password = bcrypt.hashSync(data.password, saltRounds);
    try {
        await db.user.create({
            data:data,
        });
    } catch (error) {
        return {isError:true, message: "Somthing went wrong"};
    }
    return { isSuccess: true,message: "Confirmation email sent!"};

}


export const login = async (data: any) => {
    const foundUser = await db.user.findUnique({
        where: {
            email: data.email,
        }}) 
    if(!foundUser || !foundUser.password)
        return
    
    if(! bcrypt.compareSync(data.password, foundUser.password)){
        return
    }
    return foundUser;

}




