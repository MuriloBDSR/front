import React from 'react';
import { FiGithub } from 'react-icons/fi';
import './styles.css';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Base from './components/Base';
import MinasGerais from './images/minasgerais.png'

function App() {
  return (
    <div>
      <Cabecalho />
      <Corpo/>
      <Base/>
    </div>
  );
}

export default App;
