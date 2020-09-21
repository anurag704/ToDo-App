import React, { useState } from 'react';
import ToDolist from "./ToDoList";


const App = () => {

 const [inputList,setInputList] =useState("");
 const [Items ,setItems] = useState([]);

 const itemEvent = (event) =>{
  setInputList(event.target.value);
 };

 const listOfItems = () => {
       setItems((olditems) => {
           return [...olditems, inputList];
       })
       setInputList('');
 };

 const deleteItems = (id) => {
    setItems((olditems) => {
        return olditems.filter((arrElem,index) =>{
        return index !== id;
        })
    })
};

return(

    <>
    <div className='main_div'>
    <div className='center_div'>

    <br/>    
    <h1> ToDo List </h1> 
    <br/>

    <input type='text'
     placeholder="Add items"
     value={inputList}
     onChange={itemEvent}
     />
    <button onClick={listOfItems}> + </button>
     
     <ol>
        {/* <li>{inputList} </li> */}
        { Items.map( (itemval,index) => {
           return <ToDolist key={index}
           id={index}
            text ={itemval}
            onSelect = {deleteItems}
            />;
        } )} 
    </ol>
    </div>
    </div>
    </>
);
};

export default App;