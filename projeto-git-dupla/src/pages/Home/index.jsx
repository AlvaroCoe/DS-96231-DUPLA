import './style.css'
import imgCachorroFeliz from '../../assets/cachorro-feliz.svg'

export default function Home() {
  return (
    <main className="page-home">
      
      <section className="home-principal">
        <div className="home-texto">
          <h1>Bem-vindo ao Pet & Shop</h1>
          <h2>Cuidado, carinho e muita brincadeira para o seu pet!</h2>
          <p>
            Da ração premium ao banho quentinho, temos tudo o que o seu melhor 
            amigo precisa para viver feliz e saudável. Conheça nossos profissionais!
          </p>
          
          <div className="home-botoes">
            <button className="btn-primario">Agendar Banho</button>
            <button className="btn-secundario">Ver Produtos</button>
          </div>
        </div>

          <div className="home-imagem">
            <img src={imgCachorroFeliz} alt="Cachorro Feliz" />
          </div>
      </section>

      <section className="home-beneficios">
        <h3>Por que escolher o Pet & Shop?</h3>
        <ul>
          <li>Veterinários 24 horas</li>
          <li>Produtos das melhores marcas</li>
          <li>Ambiente climatizado e seguro</li>
        </ul>
     </section>

    </main>
  )
}