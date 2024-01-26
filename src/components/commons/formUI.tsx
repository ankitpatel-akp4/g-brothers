import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { collectGenerateParams } from 'next/dist/build/utils'

export const SubmitButton = ({...props}) => {
  const status = props.pending
  delete props.pending
  return (
    <Button {...props}> {status?'Submiting':props.children} </Button>
  )
}


export const RequiredStar = () => {
  return (
    <span className='text-red-600'>*</span>
  )
}




