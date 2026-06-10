import "./style.css";

export default function SobreNos() {
  return (
    <main className="sobre-nos">
      <section className="hero-sobre">
        <h1>Sobre a Pet & Shop</h1>

        <p>
          A Pet & Shop nasceu com a missão de oferecer atendimento de qualidade,
          carinho e cuidado para os animais de estimação. Somos uma empresa que
          une Pet Shop e Clínica Veterinária em um único espaço, proporcionando
          praticidade e confiança para nossos clientes.
        </p>
      </section>

      <section className="historia">
        <h2>Nossa História</h2>

        <p>
          Fundada por apaixonados por animais, a Pet & Shop surgiu da ideia de
          criar um ambiente acolhedor onde os pets recebessem todo o cuidado
          necessário para viver com saúde e felicidade.
        </p>

        <p>
          Desde o início, buscamos oferecer produtos de qualidade, atendimento
          humanizado e serviços veterinários realizados por profissionais
          capacitados e comprometidos com o bem-estar animal.
        </p>
      </section>

      <section className="missao">
        <h2>Missão</h2>
        <p>
          Promover saúde, conforto e qualidade de vida aos animais através de
          produtos, serviços e atendimento veterinário de excelência.
        </p>

        <h2>Visão</h2>
        <p>
          Ser reconhecida como referência em cuidados veterinários e produtos
          para pets, conquistando a confiança dos tutores e proporcionando
          experiências positivas para toda a família.
        </p>

        <h2>Valores</h2>

        <ul>
          <li>❤️ Amor e respeito pelos animais.</li>
          <li>🤝 Ética e transparência.</li>
          <li>🐾 Bem-estar animal em primeiro lugar.</li>
          <li>📚 Busca constante por conhecimento e inovação.</li>
          <li>⭐ Excelência no atendimento.</li>
        </ul>
      </section>

      <section className="equipe">
  <h2>Nossa Equipe</h2>
  
  <p>
    Contamos com veterinários qualificados, atendentes treinados e
    profissionais apaixonados por animais. Nossa equipe está preparada
    para orientar os tutores e oferecer os melhores cuidados para cada
    pet.
  </p>

  <div className="membros-container">
    <div className="membro-card">
      <h3>Dra. Camila Viana</h3>
      <p className="cargo">Veterinária & Desenvolvedora Front-End</p>
      <span className="detalhe">Sistemas • 3º Módulo</span>
    </div>

    <div className="membro-card">
      <h3>Dr. Alvaro Coelho</h3>
      <p className="cargo">Veterinário & Desenvolvedor Full-Stack</p>
      <span className="detalhe">Sistemas • 3º Módulo</span>
    </div>
  </div>
</section>
    </main>
  );
}
