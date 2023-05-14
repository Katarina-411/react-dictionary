import './App.css';
import React from "react"
import Search from "./Search"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src="favicon.ico" alt="Katarina Farkas developer logo"></img>
          <h1>Online Dictionary</h1> 
          </header>
      <Search />
      <footer className="App-footer"><p>
          This application was coded by{" "}
          <a
            href="https://katarina-farkas.netlify.app/"
            target="blank"
            rel="no-referrer"
          >
            Katarina Farkas
          </a>{" "}
          using ReactJS{" "}
          <img src="./logo192.png" alt="React logo" class="ReactLogo" /> 
          <br/>
          and is{" "}
          <a
            href="https://github.com/Katarina-411/react-dictionary.git"
            target="blank"
            rel="no-referrer"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </p></footer>
      </div>
    </div>
  );
}

