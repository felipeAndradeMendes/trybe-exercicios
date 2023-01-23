import React from 'react';

class Text extends React.Component {
  render() {
    return <h1>Olá, seus { this.props.text }</h1>;
  }
}

export default Text;