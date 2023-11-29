import { Fundo, Img, ListaLi, ListaOrdenada, Texto1, Texto2 } from './Dicas.jsx'
import Floresta from '../../assets/floresta.jpg'
import Footer from '../../componentes/footer/Footer.js'
import { color } from '@chakra-ui/react'


function Dicas() {
    return (
        <>
            <Fundo>
                <Img src={Floresta} />
                
                <Texto1>
                    DICAS PARA UMA BOA NOITE DE SONO
                </Texto1>

                <Texto2>
                    <ListaOrdenada>
                        <ListaLi>Tenha um horário para dormir: Como vimos, uma pessoa deve dormir entre 7 a 8 horas, para que estejamos alertas e com bom estado de espírito. Isso inclui até mesmo dias mais livres, como feriados e fins de semana.
                            Desta maneira, para ter um sono de qualidade, é preciso ter uma regularidade nos horários para ir deitar e ir dormir. Isso faz com que o corpo se acostume à rotina.</ListaLi>

                        <ListaLi>
                            Desligue os aparelhos eletrônicos:
                            Os aparelhos eletrônicos como smartphones e televisores precisam ser desligados cerca de uma hora antes de ir para a cama, principalmente porque esses componentes estimulam o cérebro – por conta da luz emitida – e prejudicam o sono.
                            Para isso, usar música ambiente pode ser muito benéfico.
                        </ListaLi>

                        <ListaLi>
                            Tenha um ambiente escuro:
                            Para manter um ambiente adequado para relaxar e dormir com qualidade, é necessário um espaço escuro ajuda bastante!  não goste, recorra ao uso de uma luz indireta, principalmente amarela, pois esta favorece o sono.
                        </ListaLi>

                    </ListaOrdenada>
                </Texto2>


                <Footer/>

            </Fundo>

        </>
    )
}

export default Dicas;