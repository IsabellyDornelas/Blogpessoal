import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import Cadastro from './Pages/Cadastro/Cadastro';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import ListaTemas from './Components/Temas/ListaTemas/ListaTemas';
import FormularioTema from './Components/Temas/FormularioTemas/FormularioTemas';
import DeletarTema from './Components/Temas/DeletarTemas/DeletarTemas';




function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;