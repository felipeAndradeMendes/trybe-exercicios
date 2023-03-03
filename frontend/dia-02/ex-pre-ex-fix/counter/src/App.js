import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {
    const { countState, clicksState, dispatch } = this.props;
    console.log(this.props)
    return (
      <div>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button 
          onClick={ () => dispatch(actionCreator(1))}
        >
          Incrementa 1
        </button>
        <button 
          onClick={ () => dispatch(actionCreator(5))}
        >
          Incrementa 5
        </button>
        <p>
          { clicksState }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksState:state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);
