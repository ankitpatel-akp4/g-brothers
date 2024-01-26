'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export const ToastWrapper = () => {
    const { setTheme, theme } = useTheme()
    const contextClass = {
        success: "bg-green-600",
        error: "bg-red-600",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-green-600",
        dark: "bg-white-600 font-gray-300",
      };
  return (
    <ToastContainer
 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              theme={theme}
            //   transition:Bounce
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
  )
}
