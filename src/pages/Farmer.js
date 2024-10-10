import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Farmer = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    // Logic to add the item (e.g., to an API or state management)
    alert(`Item added: ${itemName}, Price: ${itemPrice}, Quantity: ${itemQuantity}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Your Items
      </Typography>
      <TextField
        label="Item Name"
        variant="outlined"
        fullWidth
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Price"
        variant="outlined"
        fullWidth
        type="number"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Quantity"
        variant="outlined"
        fullWidth
        type="number"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddItem}>
        Add Item
      </Button>
    </Container>
  );
};

export default Farmer;
