import BookList from "@/components/BookList";
import BookOverView from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";

 const  Home=()=> {
  return (
    <>
    <BookOverView {...sampleBooks}/>
    <BookList title="Popular books"/>
    </>
  );
}
export default Home