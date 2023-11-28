import styled from 'styled-components'; // Importe a biblioteca styled-components
import { Fundo, Img } from './Dicas.jsx';
import Floresta from '../../assets/floresta.jpg';
import Footer from '../../componentes/footer/Footer.js';
import { color } from '@chakra-ui/react';

// Componente styled para Texto1
const Texto1 = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  h1 {
    font-size: 2em; /* Ajuste o tamanho da fonte conforme necessário */
  }
`;

// Componente styled para Texto2
const Texto2 = styled.div`
  text-align: justify;
  font-family: Arial, sans-serif;
  ol {
    padding-left: 20px; /* Adiciona um recuo para a lista ordenada */
  }
  li {
    margin-bottom: 15px; /* Adiciona espaço entre os itens da lista */
  }
`;

function Dicas() {
  return (
    <>
      <Fundo>
        <Img src={Floresta} />
        <Texto1>
          <h1><b>DICAS PARA UMA BOA NOITE DE SONO</b></h1>
        </Texto1>

        <Texto2>
          <ol>
            <li>
              Tenha um horário para dormir: Como vimos, uma pessoa deve dormir entre 7 a 8 horas, para que estejamos alertas e com bom estado de espírito. Isso inclui até mesmo dias mais livres, como feriados e fins de semana.
              Desta maneira, para ter um sono de qualidade, é preciso ter uma regularidade nos horários para ir deitar e ir dormir. Isso faz com que o corpo se acostume à rotina.
            </li>

            <li>
              Desligue os aparelhos eletrônicos: Os aparelhos eletrônicos como smartphones e televisores precisam ser desligados cerca de uma hora antes de ir para a cama, principalmente porque esses componentes estimulam o cérebro – por conta da luz emitida – e prejudicam o sono. Para isso, usar música ambiente pode ser muito benéfico. Isso porque os sons podem relaxar o cérebro e, consequentemente, contribuir com o sono.
            </li>

            <li>
              Tenha um ambiente escuro: Para manter um ambiente adequado para relaxar e dormir com qualidade, é necessário um espaço escuro e, caso não goste, recorra ao uso de uma luz indireta, principalmente amarela, pois esta favorece o sono.
            </li>
          </ol>
        </Texto2>

        <Footer />
      </Fundo>
    </>
  );
}

export default Dicas;
