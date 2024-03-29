import styled from 'styled-components';

export const Fundo = styled.div`
    background: #0E7A8F;
    width: 100vw;
    min-height: 100vh;
    
     display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Titulo = styled.div`
    
    color: #fff;
    font-size: 20px; 
    font-family: 'Inika', sans-serif; 
    font-weight: bold;  
    margin-top: 20px  
`;

export const ContainerImg = styled.div`
    
    height: 20vh;
    width: 80vw;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
`

export const Text = styled.div`
    align-self: flex-start;
    font-weight: 600; 
    color: #D4F1F4;
    /* margin-top: 20px; */
    

`;
export const ImgFiguras = styled.img`
  
    width: 16vw;
    height: 8vh;
    border-radius: 100px;
    display:flex;
`;

export const BotaoVoltar = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    margin-top: 10px;
    margin-left: 5px;
`;