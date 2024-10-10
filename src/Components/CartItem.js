import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CartItem = ({ item, onRemove }) => {
  return (
    <Card style={{ margin: '10px', padding: '10px' }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        <Typography variant="body2">Price: ${item.price * item.quantity}</Typography>
        <Button variant="contained" color="secondary" onClick={() => onRemove(item.id)}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
