import React from 'react';

class Form extends React.Component {

  constructor() {
    super()

    this.state = {
      lugarPreferido: '',
      nome: '',
      idade: 0,
      desabafo: '',
      checkGostei: '',
      arquivo: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  handleFileUpload({target}) {
    console.log(target.files)
  }

  render() {
    return(
      <form className="form">
        <label> Escolha seu numero preferido
          <select name="lugarPreferido" value={this.state.lugarPreferido} onChange={this.handleChange}>
            <option>JumildaLand</option>
            <option>Cocolandia</option>
            <option>Jurubeba</option>
            <option>jambonápolis</option>
          </select>
        </label>
        <label> Nome
          <input 
            type="text" 
            name="nome" 
            value={this.state.nome}
            onChange={this.handleChange}
          />
        </label>
        <label> Idade
          <input 
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
        </label>
        <textarea 
          name="desabafo"
          value={this.state.desabafo}
          onChange={this.handleChange}
        />
        Gostei as perguntas
        <input 
          type="checkbox"
          name="checkGostei"
          value={this.state.checkGostei}
          onChange={this.handleChange}
        />
        <input 
          type="file"
          name="arquivo"
          value={this.state.arquivo}
          onChange={this.handleChange}
        />

      </form>
    );
  }
}

export default Form;