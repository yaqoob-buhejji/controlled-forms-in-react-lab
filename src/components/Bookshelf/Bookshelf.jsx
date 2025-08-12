import { useState } from "react";
    const BookShelf =()=>{

      const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros'},
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
 
// My classmates helped to complete this lab Yousif and Hasan

  const [newBook,setNewBook]=useState(
    {title:"",
      author:""
    }
  )
  const handleInputChange =(e)=>{
            setNewBook({...newBook, [e.target.name]: e.target.value})
  }
  const handleSubmit=(e)=>{
  e.preventDefault()

        const copyBooks = [...books, newBook]
        setNewBook({ title: "", 
        author: "" })
        
        setBooks(copyBooks)
    }
  
      return ( <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
          <label for="title"> Title</label>
          <input name='title' onChange={handleInputChange} value={newBook.title}></input>
          <label For='author'>Author: </label>
          <input name='author' onChange={handleInputChange} value={newBook.author}></input>

          <button type="submit">Add Book</button>
          </form>
  </div>
  <div className="bookCardsDiv">
        {books.map((book, index) => {
  return (
    <div key={index}>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  )
})}

  </div>
</div>
     )
    }
    export default BookShelf