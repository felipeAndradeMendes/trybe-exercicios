import React from "react";

class InputName extends React.Component {
  render() {

    const { handleChange, value } = this.props;   
    let erro = null;
    if (value.length >= 30) erro = 'Nome muito grande. 30 caractéres no máximo'
    
    return(
      <label> Nome
          <input 
            type="text" 
            name="nome" 
            value={value}
            onChange={handleChange}
          />
          <span>{ erro }</span>
        </label>
    );
  }
}

export default InputName;