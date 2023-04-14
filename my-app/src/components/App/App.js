import React from 'react';
import './App.css';
import { useState } from 'react';
import Input from '../Input';
import List from '../List';
import Button from '../Button';



function App() {

const [text, setText] = useState("");

function handleChange(event) {
  setText(event.target.value);
  console.log(event.target.value);
  console.log (text);

}

function addToList(){
  <List text = {text}/>  
}

  return (
    <div className="App">
      <header className="App-header">
    
        <p>App Test Bryony</p>
        <Input onChange = {handleChange} name = "changeName"/>
        <Button buttonClick = {addToList}/>
        <List text = {text}/>
        
      
      </header>
    </div>
  );
}

export default App;


// useState to create an empty array of list items
// const [list, setList] = useState([]);
// create a function that takes our previous items and adds one (...)
// function addNewList (listItem) {
// setList([...list, listItem])
// }
// when button is clicked run function addNewList (newListItem)
// button onClick = {() => addNewList({text})
// that takes the text and creates a new valiable 
// inside app.js present our list
// inside list index file use list.map

