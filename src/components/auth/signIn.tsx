'use client'
import { registerUser } from "@/actions/auth"
import clsx from "clsx"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { toast } from "react-toastify"
import * as Yup from 'yup'
import { RequiredStar, SubmitButton } from "../commons/formUI"
import { signIn } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"

export const formInputStyle = "border-b p-1 mt-1"
export const formLevelStyle = 'px-1 mt-2 text-sm text-left'
export const formErrorMessageStyle = 'px-1 text-xs lg:absolute text-red-600'
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


type FormSubmissionState = {
    isError?:boolean,
    isSuccess?:boolean,
    message?:string
}
const loginInitialStateRes :FormSubmissionState ={
    isError:false,
    isSuccess:false,
    message:''

}

// const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

export const SignIn = () => {
    const router = useRouter()
    const [loginRes, setloginRes] = useState<any>(loginInitialStateRes)

  return (
    <div>
    <Formik
        initialValues={{ email: '', password: ''} as {email:string, password:string}}

        validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
            
        })}
        onSubmit={async (values) => {
            setloginRes(loginInitialStateRes)
            const data = {...values}          
            const res:any = await signIn('credentials', { ...data, redirect: false })
            if(res.ok){
                toast("Login successful")
                router.push("/")
            }else{

                setloginRes((pre: any)=>({...pre, isError:true,message:'wrong credentials'}))
            }

        }}
        
        
    >
        {({ isSubmitting, values }) => (
            <Form className='flex flex-col gap-2'>
                <div className='flex flex-col   lg:justify-between '>
                    <label htmlFor="email" className={formLevelStyle}>Email Address <RequiredStar /></label>
                    <div>
                        <Field name="email" type="text" placeholder="email" className={formInputStyle} />
                        <ErrorMessage name="email" className={formErrorMessageStyle} component={"div"} />
                    </div>
                </div>
                <div className='flex flex-col   lg:justify-between '>
                    <label htmlFor="password" className={formLevelStyle}>Password <RequiredStar /></label>
                    <div>
                        <Field name="password" type="password" placeholder="Password" className={formInputStyle} />
                        <ErrorMessage name="password" className={formErrorMessageStyle} component={"div"} />
                    </div>
                </div>

                <p aria-live="polite" className={`${clsx({"bg--500": loginRes.isSuccess,
                    "bg-destructive text-destructive-foreground": loginRes.isError
                    })} mt-3 p-1 text-sm`}>
                        {loginRes?.message} 
                </p>
                <SubmitButton type="submit" pending={isSubmitting} className={'mt-3'}>{'Login'}</SubmitButton>
            </Form>
        )}
    </Formik>
    </div>
  )
}





