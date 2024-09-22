import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './desafios/home';
import ProvaJulio from './provasJulio/provajulio';
import ProvaLuciene from './provasLuciene/provaLuciene';

export default function Rotas() {
  return (
    <div>
      <Routes>
        {/* paginas de desafio */}
        <Route path="/home" element={<Home />} />
        {/* paginas das provas do Luciene */}
        <Route path='/provaLuciene' element={<ProvaLuciene/>}/>
        {/* paginas das provas do julio */}
        <Route path='/provaJulio' element={<ProvaJulio/>}/>
        {/* paginas do Ponto eletronico hospital */}
      </Routes>
    </div>
  );
}