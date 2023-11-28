import { Fundo, CardLogin, Imagem, Estilização } from "./Login.jsx"
import { useState } from 'react';
import ImgLogo from '../../assets/SSP.png'
import { Input, Button,Text } from '@chakra-ui/react'
import { Link,useNavigate } from "react-router-dom"
import Modal from 'react-modal'

// ... (import statements remain unchanged)

function Login() {
    const navegate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
  
    const handleLogin = async () => {

        console.log('Email:', email);
        console.log('Senha:', senha);
        // Faça a solicitação de login para a sua API
        const resposta = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
          });

          try {
            if (resposta.ok) {
              const dados = await resposta.json();
              console.log(dados);
              navegate('/Principal');
            } else {
              const erro = await resposta.json();
              console.error('Erro de login:', erro.mensagem);
              setModalAberto(true);
            }
          } catch (error) {
            console.error('Erro ao processar a resposta:', error);
          } 

    };
    const fecharModal = () => {
        setModalAberto(false);
    };

    return (
        <>
            <Fundo>
                <Imagem src={ImgLogo} />
                <CardLogin>

                    <Estilização>
                        <Text mb='3px'mr='50%'color='white' align='left'>Email</Text>
                        <Input variant="Email" placeholder="Email" width="100%" height="40px" align='left' value={email}
                         onChange={(e) => setEmail(e.target.value)}/>
                        
                        <Text mt='5px' mb='3px'mr='50%'color='white' align='left'>Senha</Text>
                        <Input variant="Senha" type="password" placeholder="Senha" width="100%" height="40px" value={senha}
                        onChange={(e) => setSenha(e.target.value)} />
                        </Estilização>

                    <Link to="/Cadastro">
                        <Button colorScheme="#black" variant="link" marginLeft="250px">
                            Cadastrar
                        </Button>
                    </Link>

                </CardLogin>

                    <Button
                        alignItems="center"
                        background="#5FA1AF"
                        color="white"
                        height="50px"
                        width="50%"
                        marginLeft="25%"
                        borderRadius="10px"
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>
            </Fundo>

        <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '300px',
            height: '150px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            borderRadius: '10px',
            fontSize: 'larger',
            color:'red'
          },
        }}
        >
        <p><b>Email e/ou Senha inválidos!</b></p>
        <button onClick={fecharModal}>OK</button>
        </Modal>
    </>

        
    );
}

export default Login;
