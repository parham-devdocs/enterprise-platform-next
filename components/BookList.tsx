import { cn } from "@/lib/utils";
import BookCard from "./BookCard";

interface Props{
    title:string
    books:Book[]
    containerClassName:string

}

const BookList=({title,books,containerClassName}:Props)=>{
    return(
<section className={cn( containerClassName , "mt-10")}>

    <h2 className=" font-bebas-neue text-4xl text-light-100">{title}</h2>
<ul className="book-list">
    {books.map(book=>{
        console.log(book)
      return  <BookCard key={book.id} {...book} isLoaned={book.isLoaned}/>
    })}
</ul>
        </section>
    )
}
export default BookList