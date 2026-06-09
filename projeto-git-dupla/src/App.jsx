import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos'; 
import './App.css';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} /> 
        <Route path="/servicos" element={<Servicos />} />   
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;