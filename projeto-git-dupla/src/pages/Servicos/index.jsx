import './style.css'

export default function Servicos() {
  const servicos = [
    {
      titulo: "Consultas Veterinárias",
      descricao:
        "Atendimento clínico completo para avaliação da saúde do seu pet, diagnóstico e acompanhamento especializado.",
    },
    {
      titulo: "Vacinação",
      descricao:
        "Aplicação de vacinas essenciais para prevenção de doenças e manutenção da saúde dos animais.",
    },
    {
        titulo: "Banho e Tosa",
        descricao:
        "Serviços de higiene e estética realizados por profissionais capacitados para garantir conforto e bem-estar.",
    },
    {
      titulo: "Exames Laboratoriais",
      descricao:
        "Exames de sangue, urina e outros procedimentos para auxiliar no diagnóstico veterinário.",
    },
    {
      titulo: "Cirurgias",
      descricao:
        "Procedimentos cirúrgicos realizados com equipamentos modernos e acompanhamento especializado.",
    },
    {
      titulo: "Atendimento Emergencial",
      descricao:
        "Suporte para situações urgentes, oferecendo segurança e rapidez quando seu pet mais precisa.",
    },
  ];

  return (
    <main className="servicos">
      <section className="banner-servicos">
        <h1>Nossos Serviços</h1>

        <p>
          Na Pet & Shop oferecemos uma estrutura completa para cuidar da saúde,
          higiene e qualidade de vida dos animais de estimação.
        </p>
      </section>

      <section className="lista-servicos">
        {servicos.map((servico, index) => (
          <div key={index} className="card-servico">
            <h2>{servico.titulo}</h2>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </section>

      <section className="compromisso">
        <h2>Nosso Compromisso</h2>

        <p>
          Trabalhamos diariamente para oferecer atendimento humanizado,
          tecnologia, segurança e dedicação em cada serviço realizado. Nosso
          objetivo é proporcionar mais saúde, conforto e felicidade para os
          animais e tranquilidade para seus tutores.
        </p>
      </section>
    </main>
  );
}
