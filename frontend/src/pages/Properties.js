import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Message as MessageIcon,
} from '@mui/icons-material';

const properties = [
  {
    id: 1,
    name: 'Seaside Villa',
    location: 'Miami Beach, FL',
    price: '$250/night',
    status: 'Active',
    image: 'https://source.unsplash.com/random/800x600/?villa',
    bookings: 12,
  },
  {
    id: 2,
    name: 'Mountain Cabin',
    location: 'Aspen, CO',
    price: '$180/night',
    status: 'Active',
    image: 'https://source.unsplash.com/random/800x600/?cabin',
    bookings: 8,
  },
  {
    id: 3,
    name: 'Downtown Loft',
    location: 'New York, NY',
    price: '$300/night',
    status: 'Maintenance',
    image: 'https://source.unsplash.com/random/800x600/?loft',
    bookings: 15,
  },
];

function Properties() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">
          Properties
        </Typography>
        <Button variant="contained" color="primary">
          Add Property
        </Button>
      </Box>

      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt={property.name}
              />
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h6" component="div">
                    {property.name}
                  </Typography>
                  <Chip
                    label={property.status}
                    color={property.status === 'Active' ? 'success' : 'warning'}
                    size="small"
                  />
                </Box>
                <Typography color="text.secondary" gutterBottom>
                  {property.location}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {property.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.bookings} bookings this month
                </Typography>
                
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <IconButton size="small" color="primary">
                    <MessageIcon />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Properties; 