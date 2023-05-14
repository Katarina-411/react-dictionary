import React, {useState} from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Search.css";

export default function Search() {
let [keyword, setKeyword]=useState(null);
let [results, setResults]=useState(null);
let [photos, setPhotos]=useState(null);

function handleSearchResponse(response){
   setResults(response.data[0]);
}

function handlePexelsResponse(response){
setPhotos(response.data.photos);
}

function searchKeyword() {
   let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
   axios.get(apiUrl).then(handleSearchResponse);

   let imageApiKey="5979b3odca904f12bbfe10t39f04351c";
   let imageApiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
   axios.get(imageApiUrl).then(handlePexelsResponse);
}

function handleSearch(event) {
   event.preventDefault();
   searchKeyword();
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
      <p>Results include phonetic info, definitions, examples, synonyms and images (where applicable).</p>
      </section>
      <Results results={results}/>
      <Photos photos={photos}/>
    </div>);
 }