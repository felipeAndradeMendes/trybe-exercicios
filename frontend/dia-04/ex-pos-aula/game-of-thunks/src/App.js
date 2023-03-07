import React from 'react';
import { fetchChar } from './redux/actions';
import { connect } from 'react-redux'

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

  handleClick = () => {
    const { dispatch } = this.props;
    const { charName } = this.state;
    dispatch(fetchChar(charName))
    this.setState({
      charName: '',
    });
  }

  render() {
    const { charName } = this.state;
    const { name, url, born, playedBy, loading, showError } = this.props;
    
    if (showError) return <p> NOME NÃO ENCONTRADO. ATUALIZE A PÁGINA E TENTE NOVAMENTE</p>
    if (loading) return <p> BUSCANDO INFOS...</p>

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
          onClick={ this.handleClick }
        />
        <div>
          <p>
            Nome:
            { ` ${ name }` }
          </p>
          <p>
            Data/Local de Nascimento:
            { ` ${ born }` }
          </p>
          <p>
            Ator/Atriz:
            { ` ${ playedBy[0] }` }
          </p>
          <p>
            Mais infos:
            { ` ${ url }` }
          </p>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.reducer,
});

export default connect(mapStateToProps)(App);