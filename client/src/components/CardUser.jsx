import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { BsFillCartPlusFill } from "react-icons/bs";


export default function CardUser(props) {
  const handleAddToList = ()=>{}
  return (
    <div className='user_card'>
      <CiShare2 className='share'/>
        <h2 className="title">{props.title}</h2>
        <div className="ingredients">
          <h3>Ingredients used: </h3>
          <ul>
            {JSON.parse(props.ingredients).map((ele,ind)=><li key={ind}>{ele}</li>)}
          </ul>
        </div>
        <div className="instruction">
          <h3>Instructions: </h3>
          <ol>
            {JSON.parse(props.instruction).map(
              (ele,ind)=><li key={ind}>{ele}</li>
            )}
          </ol>
        </div> 
        <button onClick={handleAddToList}><BsFillCartPlusFill style={{fontSize:"2em"}}/>
        </button>
    </div>
  )
}
