import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import { About } from './App';
import userEvent from '@testing-library/user-event';

describe('teste da aplicação inteira', () => {
    it('deve renderizar oa componente app', () => {
      renderWithRouter(<App />);
    
      const homeTitle = screen.getByRole('heading', { 
        name: 'Você está na página Início'
      });
    
      expect(homeTitle).toBeInTheDocument();
    });
    
    it('Deve renderizar o componente Sobre', async () => {
      const { history } = renderWithRouter(<App />);
    
      const aboutLink = screen.getByRole('link', { name: /sobre/i});
      expect(aboutLink).toBeInTheDocument();

      console.log('*****URL***** ANTES do click:', history.location.pathname)

      // act(() => {
        userEvent.click(aboutLink);
      // });
      console.log('*****URL***** DEPOIS do click:', history.location.pathname)

    
      const { pathname } = history.location;
      expect(pathname).toBe('/about');
      
      // await waitFor(() => {
        const aboutTitle = screen.getByRole('heading', { 
          name: 'Você está na página Sobre'
        });
        expect(aboutTitle).toBeInTheDocument();

      // });
    });

    it('Testa a aplicação inteira', () => {
      const { history } = renderWithRouter(<App />);

      act(() => {
        history.push('/pagina/que-nao-existe/');
      });

      const notFoundTitle = screen.getByRole('heading', 
      { name: 'Página não encontrada' });
      expect(notFoundTitle).toBeInTheDocument();
    });
});

describe('Testando componentes isoladamente', () => {
  it('deve renderizar o component About', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', 
    { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  });
});



