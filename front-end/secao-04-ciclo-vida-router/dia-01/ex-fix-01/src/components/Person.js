import React from "react";

class Person extends React.Component {
  render() {
    const { foto, nome, email, idade } = this.props;
    return (
      <div>
        <img src={ foto } alt={ nome } />
        <p>{ nome }</p>
        <p>{ email }</p>
        <p>{ idade }</p>
      </div>
    );
  }
}

export default Person;