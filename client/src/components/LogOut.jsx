import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/authContext'
export default function LogOut() {
    const navigate = useNavigate()
    const {_,makeValue} = useAuth()
    const handleClick = ()=>{
        makeValue({
          username:"",
          email:"",
          token:"",
          role:""
        })
        navigate("/login")
    }
  return (
    <button onClick={handleClick}>Log Out</button>
  )
}
