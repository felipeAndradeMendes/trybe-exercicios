// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );

});

it('Verifica se a primeira piada é renderizada na tela ao renderizar', async () => {
  const firstJoke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const secondJoke = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(firstJoke),
  });

  render(<App />)  

  expect(await screen.findByText('Whiteboards ... are remarkable.')).toBeInTheDocument();
  expect(screen.queryByText('What is red and smells like blue paint? Red paint!')).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(secondJoke),
  })

  const btnNewJoke = screen.getByRole('button');
  userEvent.click(btnNewJoke);
  // screen.logTestingPlaygroundURL();
  expect(await screen.findByText('What is red and smells like blue paint? Red paint!')).toBeInTheDocument();
  expect(screen.queryByText('Whiteboards ... are remarkable.')).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
