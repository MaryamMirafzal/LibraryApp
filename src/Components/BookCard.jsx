import { useState } from "react";
import { FaHeart  } from "react-icons/fa";

import styles from "./BookCard.module.css"

function BookCard({data ,handleLikedList}) {
    const { author, language, title, image,pages} = data
    const [like, setLike ] = useState(false);
    const likeHandler = ()=>{
        handleLikedList(data , like)
        setLike((like) => (!like))
    }
  return (
    <div className={styles.card}>
        <img src={image} alt="image" />
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages} pages</span>
            </div>
        </div>
        <button >
            <FaHeart onClick={likeHandler}  color={like ? "red" : "white"} fontSize="1.8rem" />
        </button>
    </div>
  )
}

export default BookCard