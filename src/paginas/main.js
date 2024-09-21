import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './desafios/home';
import Surpresa from './surpresa/surpresa';
import ProvaJulio from './provasJulio/provajulio';
import Login from './sear/login';
import RegisterPage from './sear/cadastro';
import ProvaLuciene from './provasLuciene/provaLuciene';



export default function Rotas() {
    return (
      <div>
        <Routes>
          {/* paginas de desafio */}
          <Route path="/home" element={<Home />} />
          {/* paginas da surpresa */}
          <Route path='/surpresa' element={<Surpresa/>}/>
          {/* paginas das provas do Luciene */}
          <Route path='/provaLuciene' element={<ProvaLuciene/>}/>
          {/* paginas das provas do julio */}
          <Route path='/provaJulio' element={<ProvaJulio/>}/>
          {/* paginas do SEAR */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<RegisterPage/>}/>
          <Route path='/processos' element={<RegisterPage/>}/>
          {/* paginas do Ponto eletronico hospital */}
        </Routes>
      </div>
    );
  }