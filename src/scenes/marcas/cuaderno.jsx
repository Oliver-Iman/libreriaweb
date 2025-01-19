import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, TextField } from '@mui/material';
import cuadernos from '../../data/cuadernos.json'
import Header from "../../components/Header"

const Cuadernos = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setData(cuadernos);  // Asignamos los datos JSON al estado
    }, []);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box m="20px">
            <Header title="Cuadernos" subtitle="Cuadernos escolares" />
            <div style={{ padding: '20px' }}>
            <Box sx={{ maxWidth: 600, margin: 'auto', mb: 4 }}>
                <TextField
                label="Buscar productos"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                    borderRadius: 2,
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#3f51b5', // Color del borde
                    },
                    '&:hover fieldset': {
                        borderColor: '#1a237e', // Color al pasar el mouse
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#1a237e', // Color cuando está enfocado
                    },
                    },
                }}
                />
            </Box>
               
                {/* Muestra las tarjetas filtradas */}
                <Grid container spacing={3}>
                    {filteredData.map((cuadernos) => (
                        <Grid item xs={12} sm={6} md={2} key={cuadernos.id}>
                            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    alt={cuadernos.name}
                                    height="200"
                                    image={cuadernos.image}
                                    sx={{
                                        objectFit: 'contain',  // Ajusta la imagen sin que se recorte ni pierda proporciones
                                        width: '100%',         // Asegura que la imagen ocupe todo el ancho disponible
                                        borderTopLeftRadius: '8px',
                                        borderTopRightRadius: '8px',
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{cuadernos.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Precio: <strong>S/.{cuadernos.price}</strong>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Precio x Mayor: <strong>{cuadernos.PrecioMayor}</strong>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>

    );
}
export default Cuadernos;
