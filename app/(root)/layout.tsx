import { ReactNode } from "react"

const RootLayout=({children}:{children:ReactNode})=>{
    return (
        <main className="root-container">
            <div className=" mx-auto max-w-7xl">
              <p className="text-center">Header</p>  
                <div className=" mx-20">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default RootLayout