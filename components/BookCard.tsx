import Link from "next/link"
import BookCover from "./BookCover"

const BookCard=({id,title,genre,color,isLoaned,coverUrl}:Book)=>{
    return <li>
        <Link href={`/books/${id}`}>
        <BookCover coverUrl={coverUrl}/>
        </Link>
    </li>
}

export default BookCard