import React from 'react'
import NavBar from '../components/NavBar'
import defaultDp from "../assets/images/defaultDisplayPic.png"
import { useAuth } from '../context/authContext'
export default function Profile(props) {
    const {value,makeValue} = useAuth()
  return (
    <>  
        <NavBar></NavBar>
        <div className='profile'>
            <img src={props.dp || defaultDp} alt="display pic" />
            <h2>@{value.username}</h2>
            <div className='bio'>
                <h4>Bio:</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad quasi perferendis aliquid minima, explicabo minus, nesciunt esse unde provident assumenda ea delectus fuga incidunt, nulla libero non temporibus ipsum!</p>
            </div>
        </div>
        <button>Update</button>
    </>
  )
}
