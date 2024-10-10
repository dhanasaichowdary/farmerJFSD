import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ItemCard from '../Components/ItemCard';

const Buyer = () => {
  // Example items (this could be replaced with data from an API)
  const items = [
    { id: 1, name: 'Tomatoes', price: 70},
    { id: 2, name: 'Potatoes', price: 100 },
    { id: 3, name: 'Carrots', price: 50 },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Items
      </Typography>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Buyer;
