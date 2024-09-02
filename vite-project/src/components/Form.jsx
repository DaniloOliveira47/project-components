import './form.css'
import { useState } from "react"

const Form = () => {

    const initialForm = {
        nome: "",
        idade: "",
        area: ""
    }

    const [formState, setFormState] = useState(initialForm);

    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;
        setFormState({ ...formState, [name]: value  });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nome:", formState.nome);
        console.log("Idade:", formState.idade);
        console.log("Área:", formState.area);
        console.log("________________________")
        setFormState({ ...initialForm });
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="nome">
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="idade">
                        <label htmlFor="idade">Idade</label>
                        <input 
                            type="number" 
                            id="idade" 
                            name="idade" 
                            value={formState.idade} 
                            onChange={handleInput}
                        />
                    </div>
                    <div className="area">
                        <label htmlFor="area">Área</label>
                        <select 
                            name="area" 
                            id="area" 
                            value={formState.area} 
                            onChange={handleInput}
                        >
                             <option value="">Nenhum</option>
                            <option value="futebol">Atleta de Futebol</option>
                            <option value="atletismo">Atleta de Atletismo</option>
                            <option value="basquete">Atleta de Basquete</option>
                            <option value="volei">Atleta de Vôlei</option>
                            <option value="tenis">Atleta de Tênis</option>
                        </select>
                    </div>
                    <div className="form-button">
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Form;
