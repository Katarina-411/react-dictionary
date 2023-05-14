import React from "react";
export default function Phonetics (props){
    console.log(props.phonetics.text);
    return(<span className="phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-volume-high"></i> 
        </a>
        {" "}
        {props.phonetics.text}
    </span>);
}