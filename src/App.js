import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider, UserRole } from './api/AuthProvider'
import './App.css'
import { Cart } from './components/cart/cart'
import { ErrorPage } from './components/error/error'
import { CustomerHome } from './components/home/customer-home'
import { ProviderHome } from './components/home/provider-home'
import { Login } from './components/login/login'
import { MotherBet } from './components/motherbet/motherbet'
import { RegisterAsCustomer, RegisterAsProvider } from './components/register/register'

/* function CustomerRoute({ children }) {
  return AuthProvider.isAuthenticated() ? (AuthProvider.getUser().role === UserRole.CUSTOMER ? children : <Navigate to="/error" />) : <Navigate to="/login" />;
}

function ProviderRoute({ children }) {
  return AuthProvider.isAuthenticated() ? (AuthProvider.getUser().role === UserRole.PROVIDER ? children : <Navigate to="/error" />) : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  return AuthProvider.isAuthenticated() ? (AuthProvider.getUser().role === UserRole.ADMIN ? children : <Navigate to="/error" />) : <Navigate to="/login" />;
} */

function PrivateRoute({ children }) {
  return AuthProvider.isAuthenticated() ? children : <Navigate to="/login" />;
}

function App() {
  const [cart, setCart] = useState({ items: [] })

  useEffect(() => {
    let savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    else {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register-customer" element={<RegisterAsCustomer />} />
      <Route path="/register-provider" element={<RegisterAsProvider />} />
      <Route
        path="/"
        element={
          AuthProvider.getUser().role === UserRole.CUSTOMER ?
            <PrivateRoute>
              <CustomerHome />
            </PrivateRoute>
            :
            <PrivateRoute>
              <ProviderHome />
            </PrivateRoute>
        }
      />
      <Route path="/mother-bet/:id"
        element={
          <PrivateRoute>
            <MotherBet cart={cart} setCart={setCart} />
          </PrivateRoute>

        } />
      <Route path="/cart"
        element={
          <PrivateRoute>
            <Cart cart={cart} setCart={setCart} />
          </PrivateRoute>

        } />
      <Route path="/error" element={<ErrorPage />} />
    </Routes >
  );
}

export default App;
