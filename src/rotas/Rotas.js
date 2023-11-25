import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../paginas/Login/Login";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Principal from "../paginas/Principal/Principal";
import Dicas from "../paginas/Dicas/Dicas";
import Soneca from "../paginas/Soneca/Soneca";
import Fogueira  from "../paginas/Fogueira/Fogueira";
import Floresta from "../paginas/Floresta/Floresta"
import Chuva from "../paginas/Chuva/Chuva";
import Ondas from "../paginas/Ondas/Ondas";
import BoaN from "../paginas/BoaN/BoaN";

function Rotas (){

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Login/>} path="/Login"/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<Principal/>} path="/Principal"/>
                <Route element={<Dicas/>} path="/Dicas"/>
                <Route element={<Soneca/>} path="/Soneca"/>
                <Route element={<Fogueira/>} path="/Fogueira"/>
                <Route element={<Floresta/>} path="/Floresta"/>
                <Route element={<Chuva/>} path="/Chuva"/>
                <Route element={<Ondas/>} path="/Ondas"/>
                <Route element={<BoaN/>} path="/BoaN"/>
                
            </Routes>
        </BrowserRouter>
        
    )
}

export default Rotas;