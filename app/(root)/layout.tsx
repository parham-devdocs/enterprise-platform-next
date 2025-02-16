import Header from "@/components/Header"
import { ReactNode } from "react"

const RootLayout=({children}:{children:ReactNode})=>{
    return (
        <main className="root-container">
            <div className=" mx-auto lg:mx-20 mt-10">
            <Header/>
                <main className=" mt-20">
                    {children}
                </main>
            </div>
        </main>
    )
}

export default RootLayout