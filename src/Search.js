import React, {useState} from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
let [keyword, setKeyword]=useState(null);

function handleResponse(response){
   console.log(response.data[0]);
}

function handleSearch(event) {
   event.preventDefault();
   let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleResponse);
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