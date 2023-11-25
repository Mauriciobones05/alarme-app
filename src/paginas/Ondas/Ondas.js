import { Fundo } from "./Ondas.jsx"
import { Stack, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Musica } from "./Ondas.jsx"


function Ondas (){
      
    return(
        <>
        
        <Fundo>
        <Stack direction='row' spacing={4} align='center'>
               <Link to="/Principal">
            <Button colorScheme='white' variant='ghost' color='white' marginTop='11px'>
            ᐸ-Voltar
            </Button>
            </Link>
            </Stack>
           
            <Stack
                direction='row'
                spacing={4} align='center'>
                <Musica>
                <iframe src="https://open.spotify.com/embed/track/4DqXbTaXRECqXuLQPyPqJ9?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Musica>
        </Stack>
        </Fundo>
        </>
    )
}

export default Ondas 