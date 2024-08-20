import React from 'react'
import { useAuth } from '../context/authContext'
import NavBar from "../components/NavBar"
import CardUser from '../components/CardUser'
export default function Home() {
  const {value,makeValue} = useAuth()
  return (
    <>
      <NavBar></NavBar>
      <h1>Recipe Sharing App</h1>
      <div className="card-container">
        <CardUser title="Title" ingredients={JSON.stringify(["apple","ball"])} instruction={JSON.stringify(["eat,sleep,repeat"])}></CardUser>
      </div>
      
    </>
  )
}
