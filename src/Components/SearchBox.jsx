import { BsSearchHeart } from "react-icons/bs";
import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch, searchHandler}) {
  return (
    <div className={styles.search}>
        <input 
        type="text" 
        placeholder="Search Title here"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} />
        <button onClick={searchHandler}><BsSearchHeart /></button>
    </div>
  )
}

export default SearchBox