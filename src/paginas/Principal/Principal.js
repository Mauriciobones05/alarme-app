import { Fundo, CardP, CardR, Img, Imagem, ImgPaisagem, Imagem2, Imagem3, Imagem4, ContainerPaisagens,BotaoVoltar } from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'
import Imagemfog from '../../assets/fogueira.jpeg'
import ImagemChu from '../../assets/chuvs.jpg'
import Praia from '../../assets/praia-som.webp'
import Flore from '../../assets/flore.jpeg'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Footer from '../../componentes/footer/Footer.js';
import setaImg from '../../assets/seta.png';


import { Link } from "react-router-dom"
import Alarme from '../../componentes/Alarme/Alarme.js'
function Principal() {

    const paisagens = [
        {
            img: Imagemfog,
            text: "Fogueira",
            link: '/Fogueira'
        },
        {
            img: ImagemChu,
            text: "Som da Chuva",
            link: '/Chuva'
        },
        {
            img: Praia,
            text: "Som do mar",
            link: '/Ondas'
        },
        {
            img: Flore,
            text: "Floresta",
            link: '/Floresta'
        }
    ]

    const novoArrayPaisagem = paisagens.map((paisagem) => {
        return <div>
            <Link to={paisagem.link}>

                <Button colorScheme='whiteAlpha' variant='ghost' color='white' >
                    {paisagem.text}
                </Button>
                <ImgPaisagem src={paisagem.img} />
            </Link>
        </div>
    })

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

            <Alarme/>
                <ContainerPaisagens>
                    {novoArrayPaisagem}

                </ContainerPaisagens>
                <Footer />
            </Fundo>
        </>
    )
}

export default Principal