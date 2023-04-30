import React, {useState} from "react";
import "./Search.css";

export default function Search() {
let [keyword, setKeyword]=useState(null);

function handleSearch(event) {
   event.preventDefault();
   alert(`Searching definition for ${keyword}`);
}
function handleKeywordChange(event) {
   setKeyword(event.target.value);

}

    return (
    <div>
      <form onSubmit={handleSearch}>
         <input type="search" placeholder="Search for a word" onChange={handleKeywordChange}/>
         <input type="submit" value="Search" id="search-button"/>
      </form>
    </div>);
 }