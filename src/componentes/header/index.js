import './Header.css'

const Header = () => {
    return(
        <header className='cabecalho'>
            <img src='/imagens/logo.png' alt='logotipo do site ballerini bot'/>
            <ul className='cabecalho__menu'>
                <li>Comunidade Balerini</li>
                <li>Tutorial</li>
                <li>Open Source</li>
                <li>Comandos</li>
            </ul>
        </header>
    )
}

export default Header;