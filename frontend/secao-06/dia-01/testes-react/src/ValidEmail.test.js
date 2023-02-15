import React from "react";
import { render, screen } from '@testing-library/react';
import ValidEmail from "./ValidEmail";
import App from "./App";
import userEvent from '@testing-library/user-event';


describe('Verifica validações do email', () => {
  it('verifica se não aparece msg de validação antes de enviar email', () => {
    render(<ValidEmail email='' />);  
    const isValidText = screen.queryByTestId('id-text-valid-email');
    expect(isValidText).not.toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja válido.', () => {
    render(<App />)
    const EMAIL_USER = 'email@email.com';
    const inputEmail = screen.getByLabelText('Email');
    const btnSend = screen.getByTestId('id-send');

    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  })

  it('Testando um componente, caso o email seja inválido.', () => {
    render(<App />);

    const EMAIL_USER = 'emailerrado';
    const inputEmail = screen.getByLabelText('Email');
    const btnSend = screen.getByTestId('id-send');
    
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Verifica se msg de email valido está em verde', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);

    const isValidText = screen.getByTestId('id-text-valid-email');
    expect(isValidText).toHaveAttribute('class', 'greenInput');


  })
});