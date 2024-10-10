// src/pages/Register.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Card, CardContent } from '@mui/material';


const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered with: ${email}`);
        // Add your registration logic here
    };

    return (
        <Container maxWidth="sm" className="register-container">
            <Card className="register-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom align="center">
                        Register
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            label="Phone Number"
                            fullWidth
                            margin="normal"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
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
                            style={{ marginTop: '20px' }}
                        >
                            Register
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Register;
