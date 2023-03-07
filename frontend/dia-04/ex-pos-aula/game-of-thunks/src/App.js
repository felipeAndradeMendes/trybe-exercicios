import React from 'react';

class App extends React.Component {
  state = {
    charName: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { charName } = this.state;
    return (
      <main>
        <label htmlFor="charName">
        Name:
        <input 
          type="text"
          name="charName"
          value={ charName }
          id="charName"
          placeholder="Nome do Personagem"
          onChange={ this.handleChange }
        />
        </label>
        <input 
          type="button"
          name="btnGetChar"
          value="Buscar personagem"
          onClick={ () => {}}
        />
      </main>
    );
  }
}

export default App;