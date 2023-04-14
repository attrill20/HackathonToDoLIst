import React from 'react';
import {useState} from 'react';

function Input(props) {
    // console.log(props);
    const [text, setText] = useState("");
    console.log(text);
    return(
        <div>
        <input type = "text" value = {text} onChange={(event) => setText(event.target.value)}></input>
        <button onClick ={() => {props.addToList(text); setText('')}}>Add to list</button> 
        </div>
    );
}

export default Input;