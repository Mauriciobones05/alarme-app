import { Fundo, Titulo, Text, ImgFiguras,ContainerImg } from './Soneca.jsx'
import Footer from '../../componentes/footer/Footer.js'
import { Link } from 'react-router-dom'
import { Button, Stack } from '@chakra-ui/react'

import { ambiente, sentimentos } from '../../sonecaArray.js'


function Soneca() {

    const arraySentimentos = sentimentos.map((sentimento)=>{
        return(
            <div key={sentimento.id}>
                <ImgFiguras src={sentimento.url_img} alt='descricao imagem' />
                <p style={{ color: 'white' }}>{sentimento.nome_img}</p>

            </div> 

        )
    })

    const arrayAmbiente = ambiente.map((sentimento)=>{
        return(
            <div key={sentimento.id}>
                <ImgFiguras src={sentimento.url_img} alt='descricao imagem' />
                <p style={{ color: 'white' }}>{sentimento.nome_img}</p>
            </div>

        )
    })



    return (
        <>

            <Fundo>


                <Stack align={'center'} gap={8}>

                    <Titulo>
                        ADICIONAR SEUS DADOS ANTES DE DORMIR
                    </Titulo>
                    <Text>
                        Como você se sente?
                    </Text>


                    <ContainerImg>
                       {arraySentimentos}
                    </ContainerImg>


                    <Text>
                    Ambiente
                    </Text>


                    <ContainerImg>
                       {arrayAmbiente}
                    </ContainerImg>



                    <Link to="/BoaN">
                        <Button background="#5FA1AF" color='000000' height='50px' width='50vw'  borderRadius='10px' marginTop='50px' fontWeight='bold' >CONCLUÍDO</Button>
                    </Link>
                </Stack>
                <Footer />

            </Fundo>
        </>
    )
}
export default Soneca