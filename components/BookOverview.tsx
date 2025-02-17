import Image from "next/image"
import { Button } from "./ui/button"
import BookCover from "./BookCover"

const BookOverView=({title,author,genre,rating,totalCopies,availableCopies,description,coverUrl}:Book)=>{
    return(
        <section className="book-overview">
<div className=" flex flex-1 flex-col gap-5">
    <h1>{title}</h1>
    <div className="book-info">
        <p>By <span className=" font-semibold text-light-200">{author}</span></p>
        <p>
            Category :
            <span className=" font-semibold text-light-200">{genre}</span>
        </p>
        <div className=" flex flex-row gap-1">
            <Image src={"/icons/star.svg"} width={22} height={22} alt="star"/>
            <p>{rating}</p>

        </div>
    </div>
    <div className="book-copies">
        <p>Total Books : <span>{totalCopies}</span></p>
        <p>Available Books : <span>{availableCopies}</span></p>

    </div>
    <p className="book-description">{description}</p>
    <Button className="book-overview_btn flex items-center flex-row">
        <Image src={"/icons/book.svg"} height={20} width={20} alt="book"/>
        <p className=" font-bebas-neue font-semibold text-xl">Borrow Book</p>
    </Button>

</div>
<div className="flex flex-row flex-1">
    <div><BookCover variant="wide" className="z-10" coverUrl={coverUrl}/></div>
    <div><BookCover variant="wide" className=" blur-md -left-12 rotate-12" coverUrl={coverUrl}/></div>
</div>
        </section>

    )
}
export default BookOverView