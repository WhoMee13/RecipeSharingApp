import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import userNav from '../data/user'
import cookNav from '../data/cook'
import { useAuth } from '../context/authContext'
import { GiHamburgerMenu } from "react-icons/gi";
import LogOut from './LogOut'
export default function NavBar() {
  const {value,_}=useAuth()
  const currentPath = useLocation().pathname
  const [isCollapsed,setIsCollapsed] = useState(false)
  const handleClick = ()=>{
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className={isCollapsed?'navBar collapsed':"navBar"}>
      <GiHamburgerMenu style={{color:"white",height:"10vh",width:"auto",textAlign:"left",display:"flex",justifyContent:"flex-start"}} onClick={handleClick}/>
      <nav>
        {value.role ==="cook" && cookNav.forEach((element,i) => <Link key={i} to={element.path} className={element.path ===currentPath?`navlink active`:"navlink"}>{element.name}</Link>)}
        {value.role ==="user" && userNav.map((element,i) =><Link key={i} to={element.path} className={element.path ===currentPath?`navlink active`:"navlink"}>{element.name}</Link>)}
      </nav>
      <LogOut></LogOut>
    </div>
  )
}
