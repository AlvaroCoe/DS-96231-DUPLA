import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header className="header-container">
            
            <div className="header-logo-box">
                <Link to='/' className='header-logo'>
                    <h1>🐾 Pet & Shop</h1>
                </Link>
            </div>

            <div className="header-busca">
                <input type="text" placeholder="O que seu pet precisa hoje?" />
            </div>

            <nav className="header-nav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/produtos'>Produtos</NavLink>
                <NavLink to='/servicos'>Serviços</NavLink>
                <NavLink to='/sobre-nos'>Sobre Nós</NavLink>
            </nav>

            <div className="header-acoes">
                <Link to='/carrinho' className="btn-carrinho">
                    🛒 <span>0</span>
                </Link>
                <Link to='/login' className="btn-entrar">
                    Entrar
                </Link>
            </div>

        </header>
    )
}