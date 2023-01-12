import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

//control + space

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        //JSON
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
          
    }
    
    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados </h2>
                <CampoTexto 
                label="Nome" 
                placeholder="Digite seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereco da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa
                obrigatorio = {true} 
                label = "Time" 
                itens = {props.times}
                valor ={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>               
            </form>
        </section>
    )
}

export default Formulario