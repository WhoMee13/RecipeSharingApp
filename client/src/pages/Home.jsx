import React from 'react'
import { useAuth } from '../context/authContext'
export default function Home() {
  const {value,setValue} = useAuth()
  return (
    <div>Home
    </div>

  )
}
