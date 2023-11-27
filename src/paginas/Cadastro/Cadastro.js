import { Fundo, Estilo, Card, BotaoVoltar, Label } from "./Cadastro.jsx";
import { Input, Button, Text } from '@chakra-ui/react';
import setaImg from '../../assets/seta.png';
import {Link,useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import MsgAviso from '../MensagemAviso/MensagemAviso.js'; 

function Cadastro() {
    const navegate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');
    
    const handleCadastro = async () => {
      try {
        const response = await fetch('http://localhost:3001/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome, email, senha }),
        });
  
        const data = await response.json();
  
        if (response.status === 201) {
          setMensagem('Cadastro realizado');
          setTipoMensagem('sucesso');
          setMostrarMensagem(true);
  
          setTimeout(() => {
            navegate('/login');
          }, 2000);
        } else if (response.status === 400) {
          setMensagem(data.mensagem);
          setTipoMensagem('erro');
          setMostrarMensagem(true);
        } else {
          setMensagem(`Erro ao cadastrar: ${data.mensagem}`);
          setTipoMensagem('erro');
          setMostrarMensagem(true);
        }
      } catch (error) {
        setMensagem(`Erro na solicitação de cadastro: ${error.message}`);
        setTipoMensagem('erro');
        setMostrarMensagem(true);
      }
    };
    return (
        <>
            <Fundo>
                <BotaoVoltar>
                    <Link to='../Login'>
                    <Button colorScheme='blue' variant='link'>
                    <img src={setaImg} alt="Seta Voltar" style={{ marginRight: '5px', filter: 'invert(1)' }} />
                    </Button>
                    </Link>
                </BotaoVoltar>

                <Label>
                   <Text mb='5px' mr='0%' color='white' fontSize='24px' fontWeight='bold' >Cadastrar Usuário</Text>
                 </Label>

                <Card justifyContent='space-between' align='center'>
                    <Estilo>
                    <Text mb='8px'mr='50%'color='white' align='left'>Nome Completo</Text>
                        <Input variant='Nome' placeholder='Nome'  value={nome} onChange={(e) => setNome(e.target.value)} />

                    <Text mb='8px'mr='80%'color='white'mt='5' align='left'>Email</Text>
                        <Input variant='Email' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Text mb='8px'mr='80%'color='white'mt='5' align='left'>Senha</Text>
                        <Input type='password' variant='Senha' placeholder='Senha'  value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <Text mb='8px'mr='45%'color='white'mt='5' align='left'>Confirmar Senha</Text>
                        <Input type='password' variant='Confirmar senha' placeholder='Confirmar senha' />

                    </Estilo>
                    
                </Card>
                <Button onClick={handleCadastro} background="#5FA1AF" mt='50px'color='white' height='50px' width='65%' fontFamily='arial'>Cadastrar</Button>

                {mostrarMensagem && <MsgAviso mensagem={mensagem} tipo={tipoMensagem} />}                
            </Fundo>
        </>
    )
}

export default Cadastro