import { Alert, Button, ButtonGroup, FormControl, FormGroup, FormHelperText, Grid2 as Grid, Input, InputLabel, Paper } from "@mui/material";
import { useRef, useState } from "react";

export default function Forms() {
  const [paramsalert, setParamsAlert] = useState({msg: '', show: false})
  const [lista, setLista] = useState([]); // Mantemos o estado para a lista
  const emailRef = useRef(); // Criando uma referência para o email
  const numberRef = useRef(); // Criando uma referência para o número de telefone

  // Função para adicionar o novo email e número à lista
  function handleClickSend() {
    if(emailRef.current.value === '' || numberRef.current.value === '') {
      setParamsAlert({msg: 'Preencha todos os campos', show: true})
      return
    }
    if(!parseInt(numberRef.current.value)) {
      setParamsAlert({msg: 'Número de telefone inválido', show: true})
      return
    }
    const newEmail = emailRef.current.value; // Acessando o valor do input diretamente da ref
    const newNumber = parseInt(numberRef.current.value); // Acessando o valor do input diretamente da ref
    setLista([...lista, { email: newEmail, number: newNumber }]); // Atualizando a lista
    setParamsAlert({show: false})
  }

  function handleClickRemove() {
    setLista(lista.slice(1))
  }

  function handleClickClean() {
    emailRef.current.value = ''
    numberRef.current.value = ''
  }

  return (
    <>
      {paramsalert.show && ( 
        <Alert severity="error" style={{marginTop: 20}}>
          {paramsalert.msg}
        </Alert>
      )}
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid flex={1}>
          <FormGroup sx={{paddingTop: 2}}>
            <FormControl>
              <InputLabel htmlFor="email-input">Email address</InputLabel>
              <Input
                id="email-input"
                aria-describedby="email-helper-text"
                type="email"
                inputRef={emailRef} // Conectando o input à ref de email
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    numberRef.current.focus(); // Move o foco para o input de número
                  }
                }}
                autoFocus
              />
              <FormHelperText id="name-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="number-input">Contact phone</InputLabel>
              <Input
                id="number-input"
                type="tel"
                inputRef={numberRef} // Conectando o input à ref de número
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleClickSend()
                  }
                }}
              />
            </FormControl>
          </FormGroup>
          <ButtonGroup style={{ float: 'right', marginTop: '10px' }} variant="contained">
            <Button onClick={handleClickClean}>Limpar</Button>
            <Button onClick={handleClickRemove}>Excluir</Button>
            <Button onClick={handleClickSend}>Enviar</Button>
          </ButtonGroup>
        </Grid>

        <Grid flex={3} alignSelf={'center'}>
          <Paper style={{ textAlign: 'center', alignContent: 'center' }}>
            {JSON.stringify(lista)}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
