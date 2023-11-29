import styled from 'styled-components';

export const Fundo = styled.div`
    background: #0E7A8F;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardP = styled.div`
    background: #fff;
    width: 43vh;
    height: 8vh;
    padding: 1rem;
    border-radius: 30vh;
    align-items: center;
    display: flex;
`

export const Img = styled.img`
    height: 8vh;
    width: 23%;
    margin-left: 1vh;
    margin-top: 0vh;
`

export const ContainerPaisagens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom:15vh; 
`

export const Imagem = styled.img`
    height: 8vh;
    width: 23%;
    margin-left: 1vh;
    margin-top: -2vh;
`

export const ImgPaisagem = styled.img`
    width: 40vw;
    height: 20vh;
    border-radius: 10%;
`

export const BotaoVoltar = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    margin-top: 10px;
    margin-left: 5px;
`;

export const MenuContainer = styled.div`
    background: #000;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    padding: 0 2vh;
    display: flex;
    align-items: center;
    z-index: 1; 
`;
