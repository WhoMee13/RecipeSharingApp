import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import Alert from '../../components/Alert'
export default function Register() {
  const navigate=useNavigate()
  const {value,setValue}=useAuth()
  const [username,setUsername] = useState("")
  const [email  ,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role,setRole]=useState("")
  const [error,setError]=useState("")
  document.body.style.background=`url('https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg')`
  document.body.style.backgroundSize="cover"
  document.body.style.backgroundPosition="center"
  document.body.style.backgroundRepeat="no-repeat"
  document.querySelector("#root").style.justifyContent="center"
  const handleSubmit=async(e)=>{
    console.log(username,email,password,role)
    e.preventDefault()
    try{
      const response = await fetch(`http://localhost:5000/api/${role==="user"?"user":"cook"}`,{
        "method":"post",
        "headers":{
          "content-type":"application/json"
        },
        "body":JSON.stringify({
          "username":username,
          "email":email,
          "password":password
        })
      }) 
      const data=await response.json()
      if(data.success){
        console.log(data)
        localStorage.setItem("token",data.data.token)
        setValue({
          "username":data.data.username,
          "email":data.data.email,
          "role":data.data.role,
          "token":data.data.token
        })  
        navigate(data.data.nav)
      }
      else{
        console.log(data)
        setError(data.message)
        setTimeout(()=>{setError("")},3000)
      }
    }
    catch(err){
      console.log(err)
      setError(err)
      setTimeout(()=>{setError("")},3000)
    }
    
    
  }
  return (
    <form onSubmit={handleSubmit} className='auth'>
      <h1>Register</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e)=>{
        setUsername(e.target.value)
      }} required/>
      <input type="text" placeholder='Email' value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }} required/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }} required/>
      <h3>Role:</h3>
      <div className='role-box'>
        <label htmlFor="cook">
          
          <input type="radio" name="role" id='cook' value="Cook" onChange={()=>{
            setRole("cook")
          }} required/>
          Cook
        </label>
        <label htmlFor="user">

          <input type="radio" name="role" id='user' value="User" onChange={()=>{
            setRole("user")
          }} />
          User
        </label>
      </div>
      <button type='submit'>Register</button>
      <Link to="/login">Have an account already? Log in</Link>

      {error && <Alert message={error}/>}
    </form>
    
  )
}
