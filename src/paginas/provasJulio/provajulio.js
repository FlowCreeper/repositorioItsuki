import { useRef, useState } from "react";
import { Container, TextField, Button, Typography, List, Alert, Box, Grid2 as Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BasicBars from "./components/barchart";
import Forms from "./components/forms";
import DataTable from "./components/table";
import ImageCard from "./components/imagecard";

export default function ProvaJulio() {
    const [lista, setLista] = useState([]);
    const [contador, setContador] = useState(0);
    const [ponto, setPonto] = useState([]);
    const [ascii, setAscii] = useState('');
    const [alerta, setAlerta] = useState('');
    const inputNome = useRef();
    
    const groups = [
        'Pao',
        'Cafe'
    ]

    const datas = [
        [0,1],
        [20,11],
        [5,2],
        [10,21],
        [34,5],
        [25,3],
        [6,13],
        [7,4],
    ]

    const cards = [
        {
          title: 'Gatito',
          description: 'Dançante',
        },
        {
          title: 'Creeper',
          description: 'Do Balacobaco',
          image: 'https://media1.giphy.com/media/hIzEUA4a5hGDHRgy9P/giphy.gif',
          alt: 'Charged Creeper'
        },
        {},
    ]

    const adicionaNome = () => {
        const nome = inputNome.current.value;

        if (nome === '' || lista.includes(nome)) {
            setAlerta('Nome inválido ou já foi adicionado');
        } else if (nome !== '' && !lista.includes(nome)) {
            setLista([...lista, nome]);
            inputNome.current.value = '';
            inputNome.current.focus();
        }
    };

    const removerLista = () => {
        if (lista.length > 0) {
            const novaLista = lista.slice(1); // Remove o primeiro item da lista
            setLista(novaLista);
        } else {
            setAlerta('A lista está vazia!');
        }
    };

    const contar = () => {
        setContador(contador + 1);
    };

    const zerar = () => {
        setContador(0);
        setPonto([]);
        setAscii(''); // Reseta o valor ASCII
    };

    const diminuir = () => {
        setContador(contador - 1);
    };

    const pontoSave = () => {
        let newPonto = [...ponto, { nome: `Ponto ${ponto.length + 1}`, valor: contador }];
        setPonto(newPonto);
    };

    const converterParaAscii = () => {
        // Verifica se o número está fora do intervalo ASCII (0-127)
        if (contador < 0 || contador > 127) {
            setAscii('Não existe conversão para este número');
        } 
        // Verifica se está no intervalo imprimível (33-126)
        else if (contador >= 33 && contador <= 126) {
            setAscii(String.fromCharCode(contador));
        } 
        // Se estiver no intervalo ASCII mas não for imprimível
        else {
            setAscii('Valor fora do intervalo ASCII imprimível');
        }
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Box mt={2}>
                {alerta && <Alert severity="error">{alerta}</Alert>}
            </Box>
            <Box mb={2}>
                <TextField
                    inputRef={inputNome}
                    label="Nome"
                    variant="outlined"
                    fullWidth
                />
            </Box>
            <Box mb={2}>
                <Button variant="contained" color="primary" onClick={adicionaNome}>Enviar</Button>
                <Button variant="contained" color="secondary" onClick={removerLista} sx={{ ml: 2 }}>Remover</Button>
            </Box>
            <Box mb={2}>
                <Typography variant="h6">Lista de Nomes:</Typography>
                <List>
                    {JSON.stringify(lista)}
                </List>
            </Box>
            <Box mb={2}>
                <Button variant="contained" onClick={contar}>Aumentar</Button>
                <Button variant="contained" color="warning" onClick={zerar} sx={{ ml: 2 }}>Zerar</Button>
                <Button variant="contained" color="error" onClick={diminuir} sx={{ ml: 2 }}>Diminuir</Button>
                <Button variant="contained" color="success" onClick={pontoSave} sx={{ ml: 2 }}>Registrar</Button>
            </Box>
            <Box mb={2}>
                <Typography variant="h6">Contador: {contador}</Typography>
                <Typography variant="h6">Valor ASCII: {ascii}</Typography>
                <Button variant="contained" onClick={converterParaAscii}>Converter para ASCII</Button>
            </Box>
            <Box mb={2} sx={{ height: 300 }}>
                <Typography variant="h6">Gráfico de Pontos:</Typography>
                <ResponsiveContainer>
                    <LineChart
                        data={ponto}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nome" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="valor" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
            <Box mb={2}>
                <BasicBars groups={groups} datas={datas} />
            </Box>
            <Box mb={2}>
                <Forms />
            </Box>
            <Box mb={2}>
                <DataTable />
            </Box>
            <Grid container marginTop={10} marginBottom={10} display={'flex'} columnSpacing={1} rowSpacing={1} justifyContent={'center'}>
            {cards.map((e,i) => {
                return(
                    <ImageCard key={i} title={e.title} description={e.description} image={e.image} alt={e.alt} />
                )
            })}
            </Grid>
        </Container>
    );
}