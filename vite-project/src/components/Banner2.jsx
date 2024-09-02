import './banner.css'

const Banner2 = () => {
    const cardData = [
        {
            nome: "Cristiano Ronaldo",
            imagem: "https://www.netflu.com.br/futebol-internacional/wp-content/uploads/2024/06/cristiano-ronaldo.jpg",
            area: "FUTEBOL"
        },
        {
            nome: "Curry",
            imagem: "https://playmakerbrasil.com.br/wp-content/uploads/2024/07/230501084147-02-steph-curry-warriors-kings-043023.jpg",
            area: "BASQUETE"
        },
        {
            nome: "Giba",
            imagem: "https://multipalestras.com/wp-content/uploads/2022/07/22853_giba-e1656988116186.webp",
            area: "VOLÊI"
        },
        {
            nome: "Roger Federer",
            imagem: "https://cdn.britannica.com/57/183257-050-0BA11B4B/Roger-Federer-2012.jpg",
            area: "TÊNIS"
        }



    ]



    return (
        <div className="bannerContainer">
            <h2>Atletas já resgistrados na plataforma</h2>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <div className="card" key={index}>
                        <h2 className='name'>{card.nome}</h2>
                        <img src={card.imagem} alt="" />
                        <p className='area'>{card.area}</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Banner2;