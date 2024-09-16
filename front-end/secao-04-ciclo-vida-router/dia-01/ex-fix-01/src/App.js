import './App.css';
import React from 'react';
import Person from './components/Person';

class App extends React.Component {
  state = {
    foto: '',
    nome: '',
    email: '',
    idade: '',
    loading: true,
  };

componentDidMount() {
  this.fetchPerson();
}

shouldComponentUpdate(nextProp, nextState) {
  // console.log(this.state.idade)
  // this.testAge();
  return nextState.idade < 50;
}

// testAge = () => (
//   // const { age } = this.state;
// );

fetchPerson = async () => {
  const request = await fetch('https://api.randomuser.me/');
  const data = await request.json();
  const result = data.results[0];

  const { picture: { medium }, name: {first, last}, email,  dob: { age } } = result;

  this.setState({
    foto: medium,
    nome: `${first} ${last}`,
    email: email,
    idade: age,
    loading: false,
  }); 
};


  render() {
    const {
      foto, 
      nome,
      email,
      idade,
      loading,
    } = this.state;

    const loadingEl = <span>Carregando...</span>;

    return (
      <div className="App">
        {
          loading ?
          loadingEl : 
          <Person 
            foto={ foto }
            nome={ nome }
            email={ email }
            idade={ idade }
          />
        }
      </div>
    );
  }
}

export default App;
