// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

export const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, showMsg } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {showMsg 
      && 
      <h3
        data-testid="id-text-valid-email"
        className={ verifyEmail(email) ? "greenInput" : 'redInput' }
      >
        {(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
      </h3>
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
