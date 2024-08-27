import React from 'react'
import { AuthProvider } from './context/authContext'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ProtectedRoute from './util/ProtectedRoute'
import Profile from './pages/Profile'
import Search from './pages/Search'
import ShoppingList from './pages/ShoppingList'
import Planner from './pages/Planner'
import RoleBasedRoute from './util/RoleBasedRoute'


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} exact/>
              <Route path="/login" element={<Login />} exact/>
              <Route path="/register" element={<Register />} exact/>
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} exact/>
              <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} exact/>
              <Route path="/shopping-list" element={<RoleBasedRoute role="user"><ProtectedRoute><ShoppingList /></ProtectedRoute></RoleBasedRoute>} exact/>
              <Route path="/planner" element={<RoleBasedRoute role="user"><ProtectedRoute><Planner /></ProtectedRoute></RoleBasedRoute>} exact/>
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
