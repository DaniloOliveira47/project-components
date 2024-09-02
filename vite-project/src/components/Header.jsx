import './header.css'

const Header = () => {
    const headerStyle = {
        backgroundColor: '#80AF81',
        textAlign: 'center',
        boxShadow: '3px 3px #23232344',
    }

    const titleStyle = {
        color: "white",
        textTransform: 'uppercase',
        fontFamily: 'impact',
        fontWeight: '300',
        padding: '10px'
    }

    return (
        <header style={headerStyle}>
            <div className='headerContainer'>
                <h1 style={titleStyle}>
                    Cadastre Seu Atleta
                </h1>
                <ul className="cabecalho">
                    <a href="#"><li className='selecionado'>Cadastro</li></a>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Encontrar Jogos</li></a>
                    <a href="#"><li>Seu Elenco</li></a>
                </ul>
            </div>
        </header>
    )

}
export default Header;