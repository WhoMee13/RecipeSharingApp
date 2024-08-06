import React from 'react'
import { MdError } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export default function Alert(props) {
  return (
    <div className='alert' style={props.error?{"--c":"red"}:{"--c":"green"}}>
        {props.error?<MdError style={{"color":"white","font-size":"100px"}}/>:<TiTick style={{"color":"white","font-size":"100px"}}/>}
        <p>{props.message}</p>
    </div>
  )
}
