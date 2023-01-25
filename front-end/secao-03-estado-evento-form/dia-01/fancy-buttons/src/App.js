import React from 'react';
import './App.css';

function clickBtn01() {
  console.log(`Clicou no botão 01`)
}

function clickBtn02() {
  console.log(`Clicou no botão 02`)
}

function clickBtn03() {
  console.log(`Clicou no botão 03`)
}
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ clickBtn01 }>Botão 01</button>
        <button onClick={ clickBtn02 }>Botão 02</button>
        <button onClick={ clickBtn03 }>Botão 03</button>
      </div>
      
    );
  }
}

export default App;
