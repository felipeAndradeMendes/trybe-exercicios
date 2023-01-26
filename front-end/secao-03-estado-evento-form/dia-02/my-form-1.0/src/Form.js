import React from 'react';

class Form extends React.Component {

  constructor() {
    super()

    this.state = {
      opcoes: '',
      nome: '',
      idade: 0,
      desabafo: '',
    }

    this.handleName = this.handleName.bind(this)
  }

  handleName(event) {
    console.log(event.target.value)
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return(
      <form className="form">
        <label> Escolha seu numero preferido
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>
        </label>
        <label> Nome
          <input 
            type="text" 
            name="nome" 
            // value={this.state.nome}
            onChange={this.handleName}
          />
        </label>
        <label> Idade
          <input 
            type="number"
            name="idade"
          />
        </label>
        <textarea 
          name="desabafo"
        />
      </form>
    );
  }
}

export default Form;