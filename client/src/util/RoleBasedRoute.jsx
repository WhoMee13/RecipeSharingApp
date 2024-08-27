import React, { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function RoleBasedRoute({ children, role }) {
  const { value } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (value.role !== role) {
      navigate('/');
    }
  }, [value.role, role, navigate]);
  // Render the children only if the role matches
  return value.role === role ? children : null;
}
