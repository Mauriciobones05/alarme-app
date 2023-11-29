import { Fundo, Img, Img1, Titulo, CardM } from "./BoaN.jsx"
import { Stack, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ImagemNuv from "../../assets/nuvem.webp"
import ImagemMsc from "../../assets/msc.png"

function BoaN (){
    const buttonStyle = {
        position: 'absolute',
        top: '11px',
        left: '16px', 
      };
    return(
        <>
        
        <Fundo>
        <Stack direction='row' spacing={4} align='center'>
               <Link to="/Principal">
            <Button style={buttonStyle} colorScheme='white' variant='ghost' color='white' marginTop='11px'>
            ᐸ- Voltar
            </Button>
            </Link>
            </Stack>

            
        <Img1 src={ImagemNuv}/>

        <Titulo>
           BOA NOITE...
           </Titulo>

        <CardM>
            <Img src={ImagemMsc}/>
        </CardM>
        </Fundo>
        </>
    )
}

export default BoaN