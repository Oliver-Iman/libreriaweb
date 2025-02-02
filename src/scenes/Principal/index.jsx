import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Componente de panel de administración
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleGridClick = (path) => {
    navigate(path); // Redirige a la ruta especificada
  };

  return (
    <div>

      {/* Área principal del dashboard */}
      <Container sx={{ marginTop: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://i.pinimg.com/originals/8c/0e/6b/8c0e6b461ccfaf930d338e2297e02941.jpg")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/alpha')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }} >
                ALPHA
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://i.pinimg.com/736x/6c/cf/c8/6ccfc810d5a3dc1091c62eb64073e4a6.jpg")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/standford')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }}>
                STANDFORD
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://www.logotypes101.com/logos/909/2FBB481B80EB59F9EF0F99EDAC2E1FA6/fabercastellntasq.png")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/faber-castell')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }}>
                FABER-CASTELL
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://scontent.flim38-1.fna.fbcdn.net/v/t39.30808-6/301904824_176027334983980_7242974931576293623_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFR68yib6ksqTZSbx0lsTN5x0cQB_M2efzHRxAH8zZ5_IP3xVxmdIqaBT30N8phoWZPt_8pNcibZziWTEr-Iiuc&_nc_ohc=0NKOMlCC6l4Q7kNvgFYm338&_nc_oc=AdgO1ht1KONH5HVn-umTRmxqUJjAiw4fiU7AZcnnZfUBjxc-aZEwVu7TwaoniMnywUM&_nc_zt=23&_nc_ht=scontent.flim38-1.fna&_nc_gid=Ab6vFktk5FnE_pKBaB05f4J&oh=00_AYDxf3dlPChu8ijMDoJSnkJEnj0xGDEKTckZoY8VfEMG5Q&oe=677D523A")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/layconsa')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }}>
                LAYCONSA
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://pbs.twimg.com/profile_images/730485356794150912/3aYJAlIa_400x400.jpg")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/artesco')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }}>
                ARTESCO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%), url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Qot5EBEhARa0bg6fQSLKuAHaHa%26pid%3DApi&f=1&ipt=cd0d8a0b142909c9d38d74272a1f19b3d01b7f09477d715ef2212e9d24bb9b6f&ipo=images")', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
              onClick={() => handleGridClick('/admin/arti-creativo')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }} >
                ARTI CREATIVO
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%)', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleGridClick('/admin/cuadernos')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }}>
                CUADERNOS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{
              border: '1px solid #ccc', padding: 2, borderRadius: 2,
              backgroundImage: 'linear-gradient(135deg, rgba(106, 17, 203, 0.7) 0%, rgba(37, 117, 252, 0.7) 100%)', // Degradado + imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Centra la imagen en el Box
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => handleGridClick('/admin/presupuesto')}
            >
              <Typography
                variant="h3"
                gutterBottom sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'rgba(0, 0, 0, 0.6)', // Fondo oscuro translúcido para contraste
                  padding: '10px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', // Sombra prominente
                  fontFamily: '"Poppins", sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase', // Convierte todo el texto a mayúsculas
                }} >
                PRESUPUESTO
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminDashboard;
