
import './App.css';

import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactoPage from './pages/Contacto'
import HomePage from './pages/HomePages'
import GaleriaPage from './pages/Galeria'
import ProductoPage from './pages/Productos'
import NosotrosPage from './pages/Nosotros'


function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Nosotros" element={<NosotrosPage />} />
          <Route path="Productos" element={<ProductoPage />} />
          <Route path="Galeria" element={<GaleriaPage />} />
          <Route path="Contacto" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
