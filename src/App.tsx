import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../src/Pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import Cadastro from './Pages/Cadastro/Cadastro';
import Navbar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import ListaTemas from './Components/Temas/ListaTemas/ListaTemas';
import FormularioTema from './Components/Temas/FormularioTemas/FormularioTemas';
import DeletarTema from './Components/Temas/DeletarTemas/DeletarTemas';
import ListaPostagens from './Components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './Components/postagens/formularioPostagem/FormularioPostagem';

import Perfil from './Pages/Perfil/Perfil';
import DeletarPostagem from './Components/postagens/deletarPostagem/DeletarPostagem';

function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;