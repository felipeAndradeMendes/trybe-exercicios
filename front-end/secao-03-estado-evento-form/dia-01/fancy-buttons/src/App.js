import React from 'react';
import './App.css';




class App extends React.Component {

  // constructor() {
  //   super()
  //   this.clickBtn01 = this.clickBtn01.bind(this);
  // }
  
  state = {
    cliquesBtn01: 0,
    cliquesBtn02: 0,
    cliquesBtn03: 0,
  }

  clickBtn01 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn01: estadoAnterior.cliquesBtn01 + 1,
    }), () => {
      console.log(`Clicou no botão 1: ${this.testBtnColor(this.state.cliquesBtn01)}`);
    })     
  }

  clickBtn02 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn02: estadoAnterior.cliquesBtn02 + 1,
    }), () => {
      console.log(`Clicou no botão 2: ${this.testBtnColor(this.state.cliquesBtn02)}`);
    });

  }

  
  clickBtn03 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn03: estadoAnterior.cliquesBtn03 + 1,
    }), () => {
      console.log(`Clicou no botão 3: ${this.testBtnColor(this.state.cliquesBtn03)}`);
    })
  }

  testBtnColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { cliquesBtn01, cliquesBtn02, cliquesBtn03 } = this.state;
    return (
      <div>
        <button style={ {backgroundColor: this.testBtnColor(cliquesBtn01)} } onClick={ this.clickBtn01 }>Botão 01</button>
        <button style={ {backgroundColor: this.testBtnColor(cliquesBtn02)} } onClick={ this.clickBtn02 }>Botão 02</button>
        <button style={ {backgroundColor: this.testBtnColor(cliquesBtn03)} } onClick={ this.clickBtn03 }>Botão 03</button>
        <p>Cliques no Botão 02 = {cliquesBtn02}  </p>
        <p>Cliques no Botão 01 = {cliquesBtn01}  </p>
        <p>Cliques no Botão 03 = {cliquesBtn03}  </p>
      </div>
      
    );
  }
}

export default App;
