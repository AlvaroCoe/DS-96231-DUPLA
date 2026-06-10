import { Link, NavLink } from 'react-router-dom'
import './style.css'

import imgLogo from '../../assets/LogoPetShop.svg'

export default function Header() {
    return (
        <header className="header-container">
            
            <div className="header-logo-box">
                <Link to='/' className='header-logo'>
                    <h1>Pet & Shop</h1>
                </Link>
            </div>

            <div className="header-imagem">
                <img src={imgLogo} alt="Imagem Logo" />
            </div>

            <nav className="header-nav">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/produtos'>Produtos</NavLink>
                <NavLink to='/servicos'>Serviços</NavLink>
                <NavLink to='/sobrenos'>SobreNos</NavLink>
            </nav>

        </header>
    )
}