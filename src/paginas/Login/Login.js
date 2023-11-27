import { Fundo, CardLogin, Imagem, Estilização } from "./Login.jsx"
import ImgLogo from '../../assets/SSP.png'
import { Input, Button,Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

// ... (import statements remain unchanged)

function Login() {
    return (
        <>
            <Fundo>
                <Imagem src={ImgLogo} />
                <CardLogin>

                    <Estilização>
                        <Text mb='3px'mr='50%'color='white' align='left'>Email</Text>
                        <Input variant="Email" placeholder="Email" width="100%" height="40px" align='left'/>
                        
                        <Text mt='5px' mb='3px'mr='50%'color='white' align='left'>Senha</Text>
                        <Input variant="Senha" type="password" placeholder="Senha" width="100%" height="40px" />
                        </Estilização>

                    <Link to="/Cadastro">

                        <Button colorScheme="#black" variant="link" marginLeft="250px">
                            Cadastrar
                        </Button>

                    </Link>

                </CardLogin>

                <Link to="/Principal">
                    <Button
                        alignItems="center"
                        background="#5FA1AF"
                        color="white"
                        height="50px"
                        width="50%"
                        marginLeft="25%"
                        borderRadius="10px"
                    >
                        Entrar
                    </Button>
                </Link>
            </Fundo>
        </>
    );
}

export default Login;
