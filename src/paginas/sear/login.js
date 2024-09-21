
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { LockOutlined, EmailOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Recupera os usuários do localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.email === email);
  
      // Verifica se o usuário existe e se a senha está correta
      if (!user || user.password !== password) {
        alert('Email ou senha incorretos');
      } else {
        // Redireciona para a rota de processos ao fazer login com sucesso
        navigate('/processos', { state: { user } });
      }
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <LockOutlined fontSize="large" color="primary" />
            </motion.div>
  
            <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
              Login
            </Typography>
  
            <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <TextField
                  label="Email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    startAdornment: <EmailOutlined sx={{ marginRight: 1 }} />,
                  }}
                  sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: 60 } }}
                />
              </motion.div>
  
              <motion.div whileHover={{ scale: 1.05 }}>
                <TextField
                  label="Senha"
                  type="password"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: <LockOutlined sx={{ marginRight: 1 }} />,
                  }}
                  sx={{ marginBottom: 2, '& .MuiInputBase-root': { height: 60 } }}
                />
              </motion.div>
  
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2, height: 60 }}
                >
                  Entrar
                </Button>
              </motion.div>
            </Box>
  
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                fullWidth
                variant="text"
                color="primary"
                sx={{ height: 60 }}
                href="/registro"
              >
                Não tem uma conta? Cadastre-se
              </Button>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    );
}