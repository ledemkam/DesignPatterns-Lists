// import LargeListItems from "./components/authors/LargeListItems";
// import SmallAuthorListItem from "./components/authors/SmallListItems";
 import LargeListBookItems from "./components/books/LargeListItems";
// import SmallListBookItems from "./components/books/SmallListItems";
// import NumberedList from "./components/lists/NumberedList";
// import RegularList from "./components/lists/RegularList"
 import { Modal } from "./components/Modal";
// import { authors } from './data/authors';
 import { books } from './data/books';


function App() {

  return (
      <>
         {/* <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem}/>   
         <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeListItems} />
                 🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🍝🎉🎉🎉🎉🎉🎉🎉🎉🎉
        <RegularList items={books} sourceName={"book"} ItemComponent={SmallListBookItems}/>
        <NumberedList items={books} sourceName={"book"} ItemComponent={LargeListBookItems}/> */}
        <Modal>
           <LargeListBookItems book={books[0]}/>
        </Modal>
      </>
     
  )
}

export default App
