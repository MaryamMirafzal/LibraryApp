import { useState,useEffect } from "react";

import { books as bookData } from "../constants/mockData"
import BookCard from "./BookCard";
import SideCard from "./SideCard";

import styles from "./Book.module.css"
import SearchBox from "./SearchBox";

function Book() {
    const [ liked , setLiked ] = useState([])
    const [ books , setBooks ] = useState([])
    const [ search , setSearch ] = useState([])
    const handleLikedList = (book , status)=>{
      if(status){
        const newLikedList = liked.filter( i => i.id !== book.id)
        setLiked(newLikedList)
      }else {
        setLiked((liked)=>[...liked, book])
      }
    }
    useEffect(() => {
        setBooks(bookData);
    }, []);
    const searchHandler =()=>{
        if(search){
            const newBook = bookData.filter((book)=>
            book.title.toLowerCase().includes(search))
            setBooks(newBook);
        }
        else{
            setBooks(bookData);
        }
    }

    return (
    <>
    <SearchBox 
    search={search} 
    setSearch={setSearch}
    searchHandler={searchHandler} />
    <div className={styles.container}>
        <div className={styles.cards}>
            {books.map((book)=>
            <BookCard 
            key={book.id} 
            data={book}
            handleLikedList={handleLikedList}/>)}
        </div>
        {!!liked.length && 
        <div className={styles.favorites}>
            <h4>Favorites</h4>
            {liked.map((book)=> <SideCard key={book.id} data={book} />)}
        </div>}
    </div>
    </>
  )
}

export default Book