"use client"
import Link from 'next/link';
import { moreLinkData, contactLinkData, homeLinkData } from '../../constants';
import { usePathname } from 'next/navigation';
const Footer = () => {
    const currentRoute = usePathname();
    return (
        <footer className='flex bg-stone-950  text-white gap-10 flex-wrap lg:justify-between py-16 px-10 md:px-16 justify-around'>
            <div className="flex gap-2 item-center">
                <div>                    
                    <img src={"/img/logo-full-white.svg"} className='px-2'  width={200} height={200} alt="logo"/>
                </div>
            </div>
            <div className="flex gap-x-16 gap-y-10 justify-between flex-wrap">
                <div className="flex flex-col gap-5">
                    <h2>Home</h2>
                    {homeLinkData.map((e, i)=>
                        <Link key={i}
                        className={`${currentRoute === e.url ? "text-white/100" : null} text-white/80 hover:text-white`}
                        href={e.url}
                        >{e.text}</Link>
                    )} 
                    
                </div>
                <div className="flex flex-col gap-5">
                    <h2>More</h2>
                    {moreLinkData.map((e, i)=>
                        <Link key={i}
                        className={`${currentRoute === e.url ? "text-white/100" : null} text-white/80 hover:text-white`}
                        href={e.url}
                        >{e.text}</Link>
                    )} 
                    
                </div>
                <div className="flex flex-col gap-5">
                    <h2>Contacts</h2>
                    {contactLinkData.map((e, i)=>
                        <Link key={i}
                        className={`${currentRoute === e.url ? "text-white/100" : null} text-white/80 hover:text-white`}
                        href={e.url}
                        target="_blank"
                        >{e.text}</Link>
                    )} 
                    
                </div>
                
            </div>
            <div className="flex flex-col justify-top gap-5 ">
                <div><h3 className="font-bold text-3xl max-w-[80%]  " >Subscribe to get latest updates</h3></div>
                <div className="flex ">
                    <input type="email" className="w-full text-lg text-indigo-50 px-3 rounded-l-md border border-indigo-50 border-opacity-30 h-14 bg-black" placeholder="Your email"/>
                    <button className="text-gray-800 text-lg  w-1/2 px-2 bg-white rounded-r-md">Subscribe</button>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer