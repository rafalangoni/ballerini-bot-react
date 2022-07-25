import './Header.css'

const Header = () => {
    return (
        <header className='cabecalho'>
            <img src='/imagens/logo.png' alt='logotipo do site ballerini bot' />
            <nav>
                <ul className='cabecalho__menu'>
                    <li className='cabecalho__link'>Comunidade Balerini</li>
                    <li className='cabecalho__link'>Tutorial</li>
                    <li className='cabecalho__link'>Open Source</li>
                    <li className='cabecalho__link'>Comandos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;