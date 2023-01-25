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
    // console.log(`Clicou no botão 01`)   
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn01: estadoAnterior.cliquesBtn01 + 1,
    }));
    // console.log(this.state.cliquesBtn01)
  }

  clickBtn02 = () => {
    // console.log(`Clicou no botão 02`)
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn02: estadoAnterior.cliquesBtn02 + 1,
    }));
  }
  
  clickBtn03 = () => {
    // console.log(`Clicou no botão 03`)
    this.setState((estadoAnterior, _props) => ({
      cliquesBtn03: estadoAnterior.cliquesBtn03 + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ this.clickBtn01 }>Botão 01</button>
        <button onClick={ this.clickBtn02 }>Botão 02</button>
        <button onClick={ this.clickBtn03 }>Botão 03</button>
        <p>Cliques no Botão 01 = {this.state.cliquesBtn01}  </p>
        <p>Cliques no Botão 02 = {this.state.cliquesBtn02}  </p>
        <p>Cliques no Botão 03 = {this.state.cliquesBtn03}  </p>
      </div>
      
    );
  }
}

export default App;
