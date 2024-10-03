import React from 'react'
import axios from 'axios'

function Books()
{

    const [booksData, setBooksData] = React.useState([])
    const [newbook, setNewBook] = React.useState({title:'', author : ''})
    const [disDiv, setDisDiv] = React.useState(false)
    const [selectedBook, setSelectedBook] = React.useState("")

    React.useEffect(()=>{
             getBook()
    },[])

        
    function getBook(){

    //GET METHOD to get the data from our server 
    axios.get('http://localhost:4000/books').then((response)=>{
        setBooksData([...response.data])
     }).catch(()=>{})

     }
    
       
    function addBook()
    {
        //POST METHOD to send the data to server 
        // console.log(newbook)
        axios.post("http://localhost:4000/books", newbook).then((res)=>{
            // console.log('after post', res) // idi server lo data ni add chesina tarvatha data vastadi
            getBook() // malli data motham request pampi techukuntuna mana data add cheyagane 
        })
    }


    function deleteBook(i)
    {
        // DELETE METHOD to delete particular item based on id
        //  alert(i)
         axios.delete('http://localhost:4000/books/'+i).then((res)=>{
              getBook()
         })
    }


    function editBook(book)
    {
          setSelectedBook({...book})
          setDisDiv(true)
    }

    function updateBook()
    {
        //UPDATE METHOD to update particular existing data
        axios.put('http://localhost:4000/books/' + selectedBook.id,selectedBook).then((res)=>{
            getBook()
        })
    }

   
 
    return(
        <div className='App'>
            <h1>Books</h1>

            { //true aithe display cheyali 
               !disDiv && (
                <div>
                      <input type="text" placeholder='enter title' onChange = {(e)=>{setNewBook({...newbook,title: e.target.value})}}/><br/>
                      <input type="text" placeholder='enter author' onChange = {(e)=>{setNewBook({...newbook, author:e.target.value})}}/><br/>
                      <button onClick = {addBook}>Add Book</button>
                </div>
               )
                
            }

            { 
                disDiv && (
                <div>
                    <input type="text" placeholder='enter title' value = {selectedBook.title} onChange = {(e)=>{setSelectedBook({...selectedBook,title: e.target.value})}}/><br/>
                    <input type="text" placeholder='enter author' value ={selectedBook.author} onChange = {(e)=>{setSelectedBook({...selectedBook, author:e.target.value})}}/><br/>
                    <button onClick = {updateBook}>Update Book</button>
                 </div>
                )
                  
            }

            <ul className='books'>
              {
                 booksData.length > 0 && booksData.map((book)=>{
                    return <li>
                                <h4>Book Name : {book.title}</h4>
                                <h4>Author : {book.author.toUpperCase()}</h4>
                                <button onClick = {()=>{deleteBook(book.id)}}>Delete</button>
                                <button onClick = {()=>{editBook(book)}}>Edit</button>
                            </li>
                })
              }
            </ul>
        </div>
    )
}

export default Books