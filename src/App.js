import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './components/home/home'
import { Login } from './components/login/login'
import { RegisterAsCustomer, RegisterAsProvider } from './components/register/register'
import { AuthProvider } from './api/AuthProvider'
import React from 'react'

function PrivateRoute({ children }) {
  return AuthProvider.isAuthenticated() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register-customer" element={<RegisterAsCustomer />} />
      <Route path="/register-provider" element={<RegisterAsProvider />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
