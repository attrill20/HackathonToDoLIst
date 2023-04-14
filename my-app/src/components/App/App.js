import React from 'react';
import './App.css';
import { useState } from 'react';
import Input from '../Input';
import List from '../List';
import Button from '../Button';



function App() {

const [text, setText] = useState("");

const [list, setList] = useState([])

function handleChange(event) { // this handles the text input
  let inputText = event.target.value
  setText(inputText);
  console.log(`Input text is: `, inputText);

}




function addToList(text){ // this 

setList([{text}, ...list]);
// console.log(text)
// console.log({text})
console.log(`List contains: `, {list}) // this may contain old state re async
// console.log({list})

// make a new list and console log that to see if it's been updated
const newList = [{text}, ...list]
console.log(`After async- list contains: `, {newList}) 

}

  return (
    <div className="App">
      <header className="App-header">
    
        <p>App Test Bryony</p>
        <Input onChange = {handleChange}/>
        <Button addToList = {addToList} text = {text}/>
        <List list = {list}/>
        
      
      </header>
    </div>
  );
}

export default App;


// useState to create an empty array of list items
// const [list, setList] = useState([]);✅

// create a function that takes our previous items and adds one (...)
// function addNewList (listItem) {
// setList([...list, listItem])
// }
// ✅
// when button is clicked run function addNewList (newListItem)
// button onClick = {() => addNewList({text})
// that takes the text and creates a new valiable  ✅

// inside app.js present our list
// inside list index file use list.map

