import Link from "next/link"
import BookCover from "./BookCover"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./ui/button"

const BookCard=({id,title,genre,isLoaned,coverUrl}:Book)=>{
    console.log(isLoaned)
    return <li className={cn (isLoaned && "md:w-52 w-full" )}>
        <Link href={`/books/${id}`} className={cn(isLoaned && "w-full flex flex-col items-center")}>
        <BookCover coverUrl={coverUrl}/>
        <div className={cn("mt-4",!isLoaned && "xs:max-w-40 max-w-28")}>
            <p className="book-title">{title}</p>
            <p className="book-genre">{genre}</p>
{isLoaned && (
    <div className=" mt-3 w-full">
        <div className="book-loaned">
            <Image src="/icons/calendar.svg" alt="calendar" width={18} height={18} className=" object-contain"/>
        </div>
        <p className=" text-light-200" >11 days left to return</p>
        <Button className="bg-dark-200 font-bebas-neue text-sm mt-3 w-full  ">Download receipt</Button>
    </div>
)}
        </div>
        </Link>
    </li>
}

export default BookCard