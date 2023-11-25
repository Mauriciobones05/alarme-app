import { Fundo, CardP, CardR, Img, Imagem, ImgPaisagem, Imagem2, Imagem3, Imagem4, ContainerPaisagens } from './Principal.jsx'
import Relogio from '../../assets/alarme.png'
import Lua from '../../assets/lua.png'
import Imagemfog from '../../assets/fogueira.jpeg'
import ImagemChu from '../../assets/chuvs.jpg'
import Praia from '../../assets/praia-som.webp'
import Flore from '../../assets/flore.jpeg'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Footer from '../../componentes/footer/Footer.js'


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
            <Alarme/>
                {/* <div>
                    <CardP>
                        <Img src={Relogio} />
                    </CardP>
                    <CardP>
                        <Imagem src={Lua} />
                    </CardP>
                </div> */}




                <ContainerPaisagens>
                    {novoArrayPaisagem}

                </ContainerPaisagens>






                {/* <Link to="/Ondas">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' height='500px' marginLeft='200px'marginBottom='2px' color='white' borderRadius='30px'>
                SOM DO MAR
            </Button>
            <Imagem2 src={Praia} left='100px' borderRadius='30px'/>
            </Stack>
            </Link>

            
            <Link to="/Chuva">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' marginLeft='-210px' height='500px' marginTop='2px' color='white' borderRadius='30vh'>
                DORMIR COM CHUVA
            </Button>
           
            <Imagem3 src={ImagemChu} left='100px'/>
            </Stack>
            </Link>


            <Link to="/Floresta">
            <Stack direction='column' spacing={5} align='center' height='100px'>
 
             <Button colorScheme='whiteAlpha' variant='ghost' marginLeft='200px' height='500px' marginTop='-10'marginBottom='-210px' color='white' borderRadius='30vh'>
                SONS DA NATUREZA
            </Button>
           
            <Imagem4 src={Flore}/>
    
            </Stack>
            </Link> */}



                <Footer />



            </Fundo>
        </>
    )
}

export default Principal