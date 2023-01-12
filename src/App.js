import './App.css';
import Banner from './componentes/banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  const times = [
      {
        nome: 'Programação',
        corPrimaria: '',
        corSecundaria: '',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE95F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    //NOVO ARRAY COM TODOS OS COLABORADORES
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />    
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores}
        />)}
      
    </div>
  );
}

export default App;
