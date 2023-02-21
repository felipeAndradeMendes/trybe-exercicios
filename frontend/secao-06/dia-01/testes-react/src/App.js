// App.js ( EXERCICIO CONCLUIDO )
import React, { Component } from 'react';
import './App.css';
import ValidEmail from './ValidEmail';
import './App.css';
import { verifyEmail } from './ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      showMsg: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '', showMsg: true, });
  }

  render() {
    const { email, saveEmail, showMsg } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            className={ verifyEmail(email) ? 'greenInput' : 'redInput' }
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={ saveEmail } showMsg={ showMsg } />
      </div>
    );
  }
}

export default App;
