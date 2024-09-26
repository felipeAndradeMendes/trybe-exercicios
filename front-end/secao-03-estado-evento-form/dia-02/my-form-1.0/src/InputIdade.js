import React from "react";

class InputIdade extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    let erro = '';
    if (value >= 18) erro = 'maiores de idade não tem permissão'

    return(
      <label> Idade
        <input 
          type="number"
          name="idade"
          value={value}
          onChange={handleChange}
        />
      <span>{ erro }</span>
      </label> 

    );
  }
}

export default InputIdade;