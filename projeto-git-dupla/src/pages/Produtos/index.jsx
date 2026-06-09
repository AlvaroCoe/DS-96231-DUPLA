import "./Produtos.css";

function Produtos() {
  const produtos = [
    {
      titulo: "Rações Premium",
      descricao:
        "Trabalhamos com rações de alta qualidade para cães e gatos de todas as idades, garantindo nutrição completa e saúde para seu pet.",
    },
    {
      titulo: "Medicamentos Veterinários",
      descricao:
        "Medicamentos, vitaminas e suplementos recomendados por profissionais especializados para o cuidado diário dos animais.",
    },
    {
      titulo: "Brinquedos e Acessórios",
      descricao:
        "Bolas, mordedores, arranhadores, coleiras, guias e diversos acessórios para diversão e conforto do seu companheiro.",
    },
    {
      titulo: "Higiene e Beleza",
      descricao:
        "Shampoos, condicionadores, perfumes, escovas e produtos para manter seu pet sempre limpo e saudável.",
    },
    {
      titulo: "Camas e Casinhas",
      descricao:
        "Produtos desenvolvidos para proporcionar descanso, segurança e conforto em todas as fases da vida do animal.",
    },
    {
      titulo: "Petiscos e Snacks",
      descricao:
        "Petiscos saborosos e nutritivos para recompensas, treinamento e momentos especiais com seu pet.",
    },
  ];

  return (
    <main className="produtos">
      <section className="banner-produtos">
        <h1>Nossos Produtos</h1>
        <p>
          Na Pet & Shop oferecemos uma linha completa de produtos para garantir
          saúde, conforto, diversão e qualidade de vida para seu animal de
          estimação.
        </p>
      </section>

      <section className="lista-produtos">
        {produtos.map((produto, index) => (
          <div key={index} className="card-produto">
            <h2>{produto.titulo}</h2>
            <p>{produto.descricao}</p>
          </div>
        ))}
      </section>

      <section className="diferenciais">
        <h2>Por que comprar conosco?</h2>

        <ul>
          <li>✔ Produtos de marcas reconhecidas no mercado.</li>
          <li>✔ Atendimento especializado.</li>
          <li>✔ Recomendações veterinárias para cada necessidade.</li>
          <li>✔ Variedade para cães, gatos e outros pets.</li>
          <li>✔ Qualidade, segurança e bem-estar animal.</li>
        </ul>
      </section>
    </main>
  );
}

export default Produtos;