import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h2>🐾 Pet & Shop</h2>

          <p>
            Pet Shop e Clínica Veterinária dedicada ao bem-estar animal,
            oferecendo produtos de qualidade e atendimento especializado para
            seu melhor amigo.
          </p>
        </div>

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

        <div className="footer-col">
          <h3>Links Rápidos</h3>

          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Serviços</li>
            <li>Sobre Nós</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Pet & Shop - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}