import React from 'react'
import { useState } from 'react'



const App = () =>{
    const [setValue , setFullValue] = useState();
    const [item , fullItem] = useState([])


    const inputValue = (event) =>{
        setFullValue(event.target.value)

    }


    const addItem = () =>{

        fullItem((itamVal) =>{
            return [ ...itamVal , setValue]
        })
        setFullValue("")


    }









    return(
        <>
        <h1>To Do List</h1>
        <input type= 'text' placeholder='Add Items' onChange={inputValue}  value  = {setValue}/>
        <button onClick={addItem}> + </button>
        <ol>
           { item.map((outVal) =>{
                return <li>{outVal}</li>
            })}
        </ol>
        </>
    )
}
export default App