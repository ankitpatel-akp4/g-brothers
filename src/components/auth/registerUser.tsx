'use client'
import { registerUser } from "@/actions/auth"
import clsx from "clsx"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useEffect, useState, useTransition } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "react-toastify"
import * as Yup from 'yup'
import { RequiredStar, SubmitButton } from "../commons/formUI"

type FormSubmissionState = {
    isError?:boolean,
    isSuccess?:boolean,
    message?:string
}
const registerInitialStateRes :FormSubmissionState ={
    isError:false,
    isSuccess:false,
    message:''

}
export const formInputStyle = "border-b p-1 mt-1"
export const formLevelStyle = 'px-1 mt-2 text-sm text-left'
export const formErrorMessageStyle = 'px-1 text-xs lg:absolute text-red-600'
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const RegisterUserForm = ({...props}) => {
  const [registerUserRes, setregisterUserRes] = useState<FormSubmissionState>(registerInitialStateRes)
return (
    <div>
    <Formik
        initialValues={{ name: '', email: '', password: '', reenterPassword: '' }as {name:string, email:string, password:string, reenterPassword?: string}}

        validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, { message: "Please create a stronger password" })
            .required("Required"),
            reenterPassword: Yup.string()
            .required('Please retype your password.')
            .oneOf([Yup.ref('password')], 'Your passwords do not match.')
        })}
        onSubmit={async (values) => {
            setregisterUserRes(registerInitialStateRes)
            const data = {...values}
            delete data.reenterPassword
            const res = await registerUser(data).then((res)=> res)
            if(res.isSuccess){
                toast("Account created successfully")
                props.setToggleSignin(true)
            }else{
                setregisterUserRes(res)
            }

        }}
        
        
    >
        {({ isSubmitting, values }) => (
            
            <Form className='flex flex-col gap-2'>
                <div className='flex flex-col   lg:justify-between '>
                    <label htmlFor="name" className={formLevelStyle}>Name <RequiredStar /></label>
                    <div className=''>
                        <Field name="name" type="text" placeholder="name" className={formInputStyle} />
                        <ErrorMessage name="name" className={formErrorMessageStyle} component={"div"} />
                    </div>
                </div>
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
                <div className='flex flex-col  lg:justify-between'>
                    <label htmlFor="reenterPassword" className={formLevelStyle}>Re-enter password <RequiredStar /></label>
                    <div>
                        <Field name="reenterPassword" type="password" placeholder="Re-enter Password" className={formInputStyle} />
                        <ErrorMessage name="reenterPassword" className={formErrorMessageStyle} component={"div"} />
                    </div>
                </div>


                <p aria-live="polite" className={`${clsx({"bg--500": registerUserRes.isSuccess,
                    "bg-destructive text-destructive-foreground": registerUserRes.isError
                    })} mt-3 p-1 text-sm`}>
                        {registerUserRes?.message} 
                </p>
                <SubmitButton type="submit" pending={isSubmitting} className={'mt-3'}>{'Signup'}</SubmitButton>
            </Form>
        )}
    </Formik>
    </div>
)
}



// const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

// export const RegisterUserForm = ({...props}) => {
//     const [isPending, startTransaction] =useTransition()
//     const { pending } = useFormStatus()
//     console.log(pending)
//     const [registerInitialFormState, registerUserFormAction] = useFormState(registerUser, registerInitialState)
//     useEffect(() => {
//         if(registerInitialFormState.isSuccess ){
//             props.setToggleSignin(true)
//             toast("Account created successfully")
//         }
//     }, [registerInitialFormState])
    
    
    
//     return (
    
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         // await sleep(1000);
//             const data = {...values}
//             // delete data.reenterPassword
//             // registerInitialFormState.isError= false
//             // registerInitialFormState.message= ''
//             // startTransaction(async ()=>{
//                 await  registerUserFormAction(data)
//             // setSubmitting(false)
//             // })
//         // alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <label htmlFor="firstName">First Name</label>
//           <Field name="firstName" placeholder="Jane" />
// {pending}pending
//           <label htmlFor="lastName">Last Name</label>
//           <Field name="lastName" placeholder="Doe" />

//           <label htmlFor="email">Email</label>
//           <Field name="email" placeholder="jane@acme.com" type="email" />

//           <button type="submit" disabled={pending} className="bg-green-500 disabled">
//             {isSubmitting?"sumbitting":"submit"}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// )};


