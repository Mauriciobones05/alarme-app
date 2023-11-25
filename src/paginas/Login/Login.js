import { Fundo, CardLogin, Imagem, Estilização } from "./Login.jsx"
import ImgLogo from '../../assets/SSP.png'
import { Input, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"

// ... (import statements remain unchanged)

function Login() {
    return (
        <>
            <Fundo>
                <Imagem src={ImgLogo} />
                <CardLogin>

                    <Estilização>
                        <Input variant="Email" placeholder="Email" width="90%" height="35px" />
                        <Input variant="Senha" type="password" placeholder="Senha" width="90%" height="35px" mt="10%" />
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
                        ENTRAR
                    </Button>
                </Link>
            </Fundo>
        </>
    );
}

export default Login;
