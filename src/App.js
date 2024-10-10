// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import Home from './pages/Home';
import Buyer from './pages/Buyer';
import Farmer from './pages/Farmer';
import Cart from './pages/Cart';
import ItemDetails from './pages/ItemDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/buyer" element={<Buyer />} />
                    <Route path="/farmer" element={<Farmer />} />
                    <Route path="/item/:id" element={<ItemDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
