import React from 'react'
import { CiShare2 } from "react-icons/ci";

export default function CardUser(props) {
    const handleAddToList = ()=>{}
  return (
    <div className='user_card'>
        <div className="share"><CiShare2 />
        </div>
        <div className="title">{props.title}</div>
        <div className="ingredients">{props.ingredients}</div>
        <div className="instruction">{props.instruction}</div> 
        <button onClick={handleAddToList}>Add to list</button>
    </div>
  )
}
