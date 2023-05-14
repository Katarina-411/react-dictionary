import React, {useState} from "react";
import Results from "./Results";
import axios from "axios";
import "./Search.css";

export default function Search() {
let [keyword, setKeyword]=useState(null);
let [results, setResults]=useState(null);

function handleResponse(response){
   setResults(response.data[0]);
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
    <div className="dictionary">
      <section>
      <h4> What word do you want to look up?</h4>
      <form onSubmit={handleSearch}>
         <input type="search" placeholder="Search for a word" onChange={handleKeywordChange} id="search-box"/>
         <input type="submit" value="Search" id="search-button"/>
      </form>
      </section>
      <Results results={results}/>
    </div>);
 }