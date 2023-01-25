import React from 'react';
import './App.css';



function clickBtn02() {
  console.log(`Clicou no botão 02`)
}

function clickBtn03() {
  console.log(`Clicou no botão 03`)
}
class App extends React.Component {
  constructor() {
    super()
    this.clickBtn01 = this.clickBtn01.bind(this)
  }
  
  clickBtn01() {
    console.log(`Clicou no botão 01`)
  }

  clickBtn02 = () => {
    console.log(`Clicou no botão 02`)
  }
  
  clickBtn03 = () => {
    console.log(`Clicou no botão 03`)
  }

  render() {
    return (
      <div>
        <button onClick={ this.clickBtn01 }>Botão 01</button>
        <button onClick={ this.clickBtn02 }>Botão 02</button>
        <button onClick={ this.clickBtn03 }>Botão 03</button>
      </div>
      
    );
  }
}

export default App;
