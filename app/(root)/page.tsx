import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

 const  Home=()=> {
  return (
    <>
    <BookOverView {...sampleBooks[0]}  />
    <BookList books={sampleBooks} title="Popular Books" containerClassName="" />
    </>
  );
}
export default Home

