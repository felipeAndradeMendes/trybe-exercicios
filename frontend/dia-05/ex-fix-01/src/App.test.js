import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { render, screen, act } from '@testing-library/react';
import App from './App';
import counterReducer from './redux/reducers/counterReducer';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('Testa os cliques', () => {
  test('O click dos botoes incrementa corretamente, a partir de valor padrão', () => {
    renderWithRedux(<App />);
  
    const countH2 = screen.getByRole('heading', { level: 2 });
    
    expect(countH2.innerHTML).toBe('0');
  
    const btn1 = screen.getByRole('button', { name: /incrementa 1/i });
    const btn5 = screen.getByRole('button', { name: /incrementa 5/i });
   
    act(() => {
      userEvent.click(btn1);
    });
    expect(countH2.innerHTML).toBe('1');
  
    
    act(() => {
      userEvent.click(btn5);
    })
    expect(countH2.innerHTML).toBe('6');
  });
  
  test('O click dos botoes incrementa corretamente, a partir de valor definido', () => {
      const initialState = {
        counterReducer: {
          count: 5,
        },
      };
    
      renderWithRedux(<App />, { initialState });
    
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    
      const countH2 = screen.getByRole('heading', { level: 2 });
      expect(countH2.innerHTML).toBe('5');
    
      act(() => {
        userEvent.click(buttons[0]);
      });
      expect(countH2.innerHTML).toBe('6');  
      act(() => {
        userEvent.click(buttons[1]);
      });
      expect(countH2.innerHTML).toBe('11');  
    });

  test('Incrementa o valor da store ao clicar no botão', () => {
    const { store } = renderWithRedux(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(0);

    const button = screen.getByText('Incrementa 1');
    act(() => {
      userEvent.click(button);
    });
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(1);

  });

  test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
    const initialState = {
      counterReducer: {
        count: 7,
      },
    };

    const { store } = renderWithRedux(<App />, { initialState });

    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(7);
    expect(screen.getByText('7')).toBeInTheDocument();
  });
});

