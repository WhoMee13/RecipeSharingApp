import React from 'react'
import { AuthProvider } from './context/authContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ProtectedRoute from './util/ProtectedRoute'
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} exact/>
              <Route path="/login" element={<Login />} exact/>
              <Route path="/register" element={<Register />} exact/>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
