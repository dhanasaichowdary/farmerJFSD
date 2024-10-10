// src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Card, CardContent } from '@mui/material';
import { useAuth } from '../AuthContext'; // Import useAuth
import './login.css'; // Custom CSS for any additional styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const { login } = useAuth(); // Get login function from context

    const handleSubmit = (e) => {
        e.preventDefault();

        // Manual login credentials
        const farmerCredentials = {
            email: '2200032874@gmail.com',
            password: 'Meghan013@',
            role: 'farmer'
        };
        const buyerCredentials = {
            email: 'meghankumar013@gmail.com',
            password: 'Meghan123*+',
            role: 'buyer'
        };

        if (role === 'farmer' && email === farmerCredentials.email && password === farmerCredentials.password) {
            login(email, 'farmer');
            alert('Logged in as Farmer');
            // Redirect to Farmer page if needed
        } else if (role === 'buyer' && email === buyerCredentials.email && password === buyerCredentials.password) {
            login(email, 'buyer');
            alert('Logged in as Buyer');
            // Redirect to Buyer page if needed
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container maxWidth="sm" className="login-container">
            <Card className="login-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom align="center">
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Role</InputLabel>
                            <Select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <MenuItem value="farmer">Farmer</MenuItem>
                                <MenuItem value="buyer">Buyer</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="login-button"
                            style={{ marginTop: '20px' }}
                        >
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Login;
