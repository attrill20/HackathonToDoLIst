import React from 'react';
import './App.css';
import { useState } from 'react';
import Input from '../Input';
import List from '../List';

function App() {

const [list, setList] = useState([])

function addToList(text){ // this function adds new object to our array

  console.log("Add function:", text);

  setList([{text}, ...list]);
  console.log(`List contains: `, {list}) // this may contain old state re async
  const newList = [{text}, ...list]
  console.log(`After async- list contains: `, {newList}) 
}

const ListItems = list.map((listItem) =>
<container>
<li key={listItem.id}>{listItem.text}</li>
<button>🗑️</button>
</container>

);

  return (
    <div className="App">
      <header className="App-header">
    
        <p>Shopping List</p>
        <Input addToList = {addToList}/>
        <ul>{ListItems}</ul>
        
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
// that takes the text and creates a new variable  ✅

// inside app.js present our list
// inside list index file use list.map

