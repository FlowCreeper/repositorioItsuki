import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { PersonAddOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';

export default function RegisterPage({ goToLogin }){
  const [formData, setFormData] = useState({
    schoolName: '', email: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
      email: formData.email,
      password: formData.password,
      school: { name: formData.schoolName },
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <PersonAddOutlined fontSize="large" color="primary" />
          </motion.div>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
            Cadastro
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <TextField
                label="Nome da Escola"
                name="schoolName"
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: 60 } }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: 60 } }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <TextField
                label="Senha"
                name="password"
                type="password"
                onChange={handleChange}
                fullWidth
                required
                sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: 60 } }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <TextField
                label="Confirmar Senha"
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                fullWidth
                required
                sx={{ '& .MuiInputBase-root': { height: 60 } }}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2, height: 60 }}>
              <Nav.Link href = "/login">Cadastrar</Nav.Link>
              </Button>
            </motion.div>
          </Box>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button onClick={goToLogin} fullWidth variant="outlined" color="primary" sx={{ height: 60 }} href = "/login">
              Voltar para Login
            </Button>
          </motion.div>
        </Box>
      </Container>
    </motion.div>
  );
};