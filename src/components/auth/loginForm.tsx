'use client'
import { ClientSafeProvider, LiteralUnion, getCsrfToken, getProviders, signIn } from "next-auth/react"
import { Provider, useEffect, useState, useTransition } from "react"
import { Button } from "../ui/button"
import {registerUser} from '@/actions/auth'
import {RequiredStar, SubmitButton} from "../commons/formUI"
import { useFormState } from "react-dom"
import clsx from "clsx"
import { toast } from "react-toastify"
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import { RegisterUserForm } from "./registerUser"
import { SignIn } from "./signIn"




const providerList = [
    {
        id:'google',
        name:'Google'
    },
    {
        id:'github',
        name: 'GitHub'
    }
]


  
export default function SignInSignUp() {
    const [toggleSignin, setToggleSignin] = useState(true)
    const [csrfToken, setCsrfToken] = useState<string>()
    useEffect(() => {
        (async ()=>{
            // const providers= await getProviders() || []
            const csrfToken = await getCsrfToken()
            setCsrfToken(csrfToken)
        })()
    }, [])

    
    

    
    
    
return (
    <>
        <div className="bg-secondary flex flex-wrap gap-10 justify-center   items-center">
        

            <div className=" shadow-md flex flex-col lg:flex-row lg:w-1/2 m-5 rounded-2xl p-5">
                <div className=" ">
                {toggleSignin?
                    <div className="bg-secondary flex flex-col flex-wrap justify-center items-center gap-10 py-1">
                        {/* <form method="post" action="/api/auth/callback/credentials" className="bg-secondary flex flex-col flex-wrap gap-5">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
                            <label>
                                <span className="block pb-2 text-sm">Username/Email</span>
                                
                                <input name="username" type="text" className="px-2 py-1" required/>
                            </label>
                            <label>
                                <span className="block pb-2 text-sm">Password</span>
                                <input name="password" type="password" className="px-2 py-1" required/>
                            </label>
                            <SubmitButton type="submit">Sign in</SubmitButton>
                        </form> */}
                        <SignIn/>
                    </div>
                :
                    <div className="bg-secondary flex flex-col flex-wrap justify-center items-center gap-10 py-1">
                        <RegisterUserForm setToggleSignin={setToggleSignin}/>
                    </div>
                }

                    {/* <div className="inline-flex relative items-center justify-center w-full">
                        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                        <div className="absolute px-4 -translate-x-1/2  left-1/2 bg-secondary">
                                Or
                        </div>
                    </div> */}
                    
                    <div className="flex justify-center pt-5 text-xs">
                        {toggleSignin?
                            <div>Don't have an account? 
                                <span className="text-primary cursor-pointer" onClick={()=> setToggleSignin((!toggleSignin))}> Signup </span>
                            </div>
                            : 
                        <div>Already have an account? 
                            <span className="text-primary cursor-pointer" onClick={()=> setToggleSignin((!toggleSignin))}> Signin </span>
                        </div> 
                        }
                            
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex flex-col gap-5 items-center justify-center w-full my-4">
                            {
                                providerList.map((ele,i)=>
                                    <div key={i} className="">
                                        
                                        <Button onClick={ ()=>  signIn(ele.id)}>
                                            Continue with {ele.name}
                                        </Button>
                                        
                                    
                                    </div>
                                )
                            }
                    </div>
                </div>
            </div>
            
        </div>
    </>
    )
  }


  

{/* <form method="post" action={(e)=>{
    registerInitialFormState.isError= false
    registerInitialFormState.message= ''
    startTransaction( ()=>
    registerUserFormAction(e))}} 
className="bg-secondary flex flex-col flex-wrap gap-3">
    
    <label>
        <span className="block pb-1 text-sm">Name</span>
        
        <input name="name" type="text" className="px-2 py-1" required/>
    </label>
    <label>
        <span className="block pb-1 text-sm">Email</span>
        
        <input name="email" type="email" className="px-2 py-1" required/>
    </label>
    <label>
        <span className="block pb-1 text-sm">Password</span>
        <input name="password" type="password" className="px-2 py-1" required />
    </label>
    <label>
        <span className="block pb-2 text-sm">Reenter Password</span>
        <input name="reenterPassword" type="password" className="px-2 py-1" required/>
    </label>
    <p aria-live="polite" className={`${clsx({"bg-green-500": registerInitialFormState.isSuccess,
"bg-dan": registerInitialFormState.isError
})} p-1 text-sm`}>
       {registerInitialFormState?.message} 
    </p>
    <SubmitButton type="submit">Sign Up</SubmitButton>
</form> */}
  
