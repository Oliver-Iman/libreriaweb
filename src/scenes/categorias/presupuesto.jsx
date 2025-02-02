import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, TextField, Box, InputAdornment } from '@mui/material';
import FaberCastellData from '../../data/fabercastell.json'; // Asume que tienes un archivo JSON con la data de los productos
import ArtescoData from '../../data/artesco.json';
import CuadernosData from '../../data/cuadernos.json'
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Presupuesto = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(1);

  // Unificar los productos de ambos JSON
  const productos = [...FaberCastellData, ...ArtescoData, ...CuadernosData];

  // Filtrar los productos con base en el término de búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito, productoConCantidad];
      calcularTotal(nuevoCarrito);
      return nuevoCarrito;
    });
  };

  // Calcular el total del carrito
  const calcularTotal = (carrito) => {
    const totalCalculado = carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    setTotal(totalCalculado);
  };

  const generarPDF = () => {
    const doc = new jsPDF();

    // Título del PDF
    doc.setFillColor(63, 81, 181); // Un color de fondo (puedes elegir otro)
    doc.rect(0, 0, 210, 25, 'F'); // El rectángulo de fondo para el título

    // Título del PDF con diseño mejorado
    doc.setFont('helvetica', 'bold'); // Usamos una fuente más destacada
    doc.setFontSize(22); // Aumentamos el tamaño del texto
    doc.setTextColor(255, 255, 255); // Color del texto blanco

    // Texto del título
    doc.text('Proforma', 105, 15, { align: 'center' });

    // Agregar un subtítulo (opcional)
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(255, 255, 255); // Cambiar el color a blanco

    // Crear la tabla con los productos del carrito
    const tableData = carrito.map((producto) => [
      producto.name,
      producto.cantidad,
      `S/. ${producto.price}`,
      `S/. ${producto.price * producto.cantidad}`
    ]);

    // Agregar tabla al PDF
    doc.autoTable({
      head: [['Producto', 'Cantidad', 'Precio Unitario', 'Subtotal']],
      body: tableData,
      startY: 30,
      margin: { top: 20 },
    });

    // Calcular el total dentro de la función de PDF (en lugar de depender del estado)
    const totalCalculado = carrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    console.log("Total Calculado:", totalCalculado);

    // Total
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    const yPosition = doc.lastAutoTable.finalY + 10;
    doc.text(`Total: S/. ${totalCalculado}`, 14, yPosition);

    // Descargar el PDF
    doc.save('carrito.pdf');
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Campo de búsqueda */}
      <TextField
        label="Buscar productos"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
      />

      {/* Mostrar productos solo cuando se haya iniciado la búsqueda */}
      {searchTerm && (
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {productosFiltrados.map((producto) => (
          <Grid item xs={12} sm={6} md={2} key={producto.id}>
            <Card>
              <CardMedia
                component="img"
                alt={producto.name}
                height="140"
                image={producto.image}
              />
              <CardContent>
                <Typography variant="h6">{producto.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: S/.{producto.price}
                </Typography>
                <TextField
                  label="Cantidad"
                  type="number"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">x</InputAdornment>,
                  }}
                  sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" onClick={() => agregarAlCarrito(producto, parseInt(cantidad))}>
                  Agregar al carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>)}

      {/* Mostrar el carrito y el total */}
      <Box sx={{ marginTop: 4, padding: 2, borderRadius: 2 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 2 }}>
          Carrito de Compras
        </Typography>
        {carrito.length > 0 ? (
          <Box>
            {/* Mostrar carrito en formato tabla */}
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid item xs={12}>
              <Grid  container spacing={2} sx={{ backgroundColor: '#f0f0f0', padding: 1 }}>
                  <Grid item xs={3}>
                    <Typography color='secondary' fontWeight="bold">Producto</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography color='secondary' fontWeight="bold">Cant.</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography color='secondary' fontWeight="bold">P. Unitario</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography color='secondary' fontWeight="bold">Subtotal</Typography>
                  </Grid>
                </Grid>

                {carrito.map((producto, index) => (
                  <Grid container spacing={2} key={index} sx={{ padding: 1 }}>
                    <Grid item xs={3}>
                      <Typography>{producto.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{producto.cantidad}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>S/. {producto.price}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>S/. {producto.price * producto.cantidad}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Total */}
            <Typography color='secondary' variant="h6" sx={{ fontWeight: 'bold' }}>
              Total: S/. {total}
            </Typography>

            {/* Botón para generar PDF */}
            <Button color='secondary' variant="outlined" onClick={generarPDF} sx={{ marginTop: 2 }}>
              Descargar PDF
            </Button>
          </Box>
        ) : (
          <Typography>No hay productos en el carrito</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Presupuesto;
