"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header=()=>{
    const pathname=usePathname()
    return ( 
    <header className=" flex justify-between  mx-auto">
<Link href="/" className=" flex gap-1 text-light-100 items-center font-extrabold text-xl "><Image src="/icons/logo.svg" alt="bookwise logo" width={40} height={40}/>BookWise</Link>
<ul className=" flex flex-row items-center gap-8">
    <li className=" cursor-pointer text-base capitalize"><Link href="/library" className={cn(
        "text-base cursor-pointer capitalize", pathname === "/library"?"text-light-200": "text-light-100"
    )}>Library</Link></li>

</ul>
    </header> )
}

export default Header