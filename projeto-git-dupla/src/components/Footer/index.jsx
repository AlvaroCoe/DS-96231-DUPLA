import { NavLink } from 'react-router-dom';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Contato</h3>
          <p>📍 Rua dos Animais, 123</p>
          <p>📍 Salvador - BA</p>
          <p>📞 (71) 99999-9999</p>
          <p>✉ contato@peteshop.com.br</p>
        </div>

        <div className="footer-col">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 08h às 18h</p>
          <p>Sábado: 08h às 14h</p>
          <p>Domingo: Fechado</p>
          <p>Emergências: 24 horas</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pet & Shop - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}