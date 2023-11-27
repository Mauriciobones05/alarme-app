import React, { useState } from 'react';
import { Fundo, Titulo, Text, ImgFiguras, ContainerImg, BotaoVoltar } from './Soneca.jsx';
import Footer from '../../componentes/footer/Footer.js';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@chakra-ui/react';
import setaImg from '../../assets/seta.png';

import { ambiente, sentimentos } from '../../sonecaArray.js';

function Soneca() {
  const [imagensSelecionadas, setImagensSelecionadas] = useState([]);

  const toggleSelecao = (categoria, id) => {
    setImagensSelecionadas((prevSelecionadas) => {
      const novaSelecao = [...prevSelecionadas];
      const index = novaSelecao.findIndex((item) => item.categoria === categoria && item.id === id);

      if (index !== -1) {
        novaSelecao.splice(index, 1); // Remove a seleção se a imagem já estiver marcada
      } else {
        novaSelecao.push({ categoria, id }); // Adiciona a seleção se a imagem não estiver marcada
      }

      return novaSelecao;
    });
  };

  const arraySentimentos = sentimentos.map((sentimento) => (
    <div key={sentimento.id}>
      <ImgFiguras
        src={sentimento.url_img}
        alt='descricao imagem'
        onDoubleClick={() => toggleSelecao('sentimento', sentimento.id)}
        style={{
          border: imagensSelecionadas.some((item) => item.categoria === 'sentimento' && item.id === sentimento.id)
            ? '2px solid red'
            : 'none',
        }}
      />
      <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
        {sentimento.nome_img}
      </p>
    </div>
  ));

  const arrayAmbiente = ambiente.map((sentimento) => (
    <div key={sentimento.id}>
      <ImgFiguras
        src={sentimento.url_img}
        alt='descricao imagem'
        onDoubleClick={() => toggleSelecao('ambiente', sentimento.id)}
        style={{
          border: imagensSelecionadas.some((item) => item.categoria === 'ambiente' && item.id === sentimento.id)
            ? '2px solid red'
            : 'none',
        }}
      />
      <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
        {sentimento.nome_img}
      </p>
    </div>
  ));

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

        <Stack align={'center'} gap={8}>

          <Titulo>
            Relatório Diário
          </Titulo>
          <Text>
            Como você se sente?
          </Text>

          <ContainerImg style={{ marginBottom: '10px' }}>
            {arraySentimentos}
          </ContainerImg>

          <Text>
            Ambiente
          </Text>

          <ContainerImg style={{ marginBottom: '10px' }}>
            {arrayAmbiente}
          </ContainerImg>

          <Link to="/BoaN">
            <Button
              background="#5FA1AF"
              color='000000'
              height='50px'
              width='50vw'
              borderRadius='10px'
              marginTop='15px'
              fontWeight='bold'
            >
              CONCLUÍDO
            </Button>
          </Link>
        </Stack>
        <Footer />
      </Fundo>
    </>
  );
}

export default Soneca;
