import BookShelf from './components/Bookshelf/Bookshelf';
import './App.css'
import { useState } from 'react';

function App() {
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
  const [newBook,setNewBook]=useState(
    {title:"",
      author:""
    }
  )
  const handleInputChange =(e)=>{
            setNewBook({...newBook, [e.target.name]: e.target.value})
  }
  return (
    <>
     <h1>My Bookshelf</h1>
      <BookShelf />
    </>
  )
}

export default App