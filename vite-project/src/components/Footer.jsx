import './footer.css'

const Footer = () => {

    return (
        <footer>
        <div class="container-footer">
            <div class="linha">
                
                <div class="coluna">
                    <h4>Sobre nós</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href="#"> nossos serviços </a></li>
                        <li><a href="#"> Objetivos </a></li>
                        
                    </ul>
                </div>
               
                <div class="coluna">
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">Como cadastrar?</a></li>
                        <li><a href="#">Atletas cadastrados</a></li>
                        <li><a href="#">Como controlar seu elenco?</a></li>
                        <li><a href="#">Segurança</a></li>
                    </ul>
                </div>
               
                <div class="coluna">
                    <h4>Gerenciamos diversas áreas</h4>
                    <ul>
                        <li><a href="#">Futebol</a></li>
                        <li><a href="#">Volêi</a></li>
                        <li><a href="#">Basquete</a></li>
                        <li><a href="#">Atletismo</a></li>
                    </ul>
                </div>
                
                
                
            </div>
        </div>
    </footer>
    )
}
export default Footer