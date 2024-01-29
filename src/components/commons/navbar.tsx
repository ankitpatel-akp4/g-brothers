'use client'
import { LinkData } from "@/constants"
import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { ThemeToggle } from "../theme/themeTogggle";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import UserButton from "../auth/userButton";

export const Navbar = () => {
    const [touggle, setTouggle] = useState<boolean>(false)
    const currentRoute = usePathname();
  return (
    <>
        <Topbar/>
        <nav className={`sticky top-0`}>
            <div className="flex justify-between px-5  lg:px-14 py-2 text-xl
            font-semibold text-secondary-foreground bg-secondary items-center
            ">
                <div className="flex gap-2 item-center">
                    <div>
                        <Link href={"/"}>                    
                            <img src={"/img/logo-full-white.svg"}  width={200} height={100} className="px-2 hidden dark:block" alt="logo"/>
                            <img src={"/img/logo-full-black.svg"}  width={200} height={100} className="px-2 dark:hidden" alt="logo"/>
                        </Link>
                    </div>

                </div>

                <div className={`${touggle?"flex flex-col h-screen absolute top-14 left-0 gap-5 w-full":"hidden lg:flex"} lg:flex lg:h-auto lg:static  lg:justify-end  lg:gap-6 bg-secondary bg-opacity-100 z-100`}>
                    {LinkData.map((e,i)=>
                    <div key={i} className="">
                        
                        <div className="">
                            <Link href={e.url}
                            onClick={()=> setTouggle(false)}
                            className={`${currentRoute === e.url ? "text-primary" : null} hover:text-primary flex w-full justify-center lg:hover:bg-muted`}>
                                {e.text}
                            </Link>
                        </div>
                    </div>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <button className="lg:hidden" onClick={()=> setTouggle(!touggle)}>{touggle?<IoClose size={"2rem"}/>:<IoMenu size={"2rem"}/>}</button>
                    <ThemeToggle/>
                    <UserButton />
                </div>
            </div>

        </nav>
    </>
  )
}


const Topbar = () => {
  return (
    <div className="flex text-sm justify-end gap-3 md:gap-20 px-5 lg:px-16 py-1 ">
        <div><a href="tel:+918756523181" className="flex items-center"><span className="px-2"><IoCall /></span> +918756523181</a></div>
        <div><a href="mailto:indicate0@gmail.com" className="flex items-center"><span className="px-2"><IoMail/></span> indicate0@gmail.com</a></div>
    </div>
  )
}

