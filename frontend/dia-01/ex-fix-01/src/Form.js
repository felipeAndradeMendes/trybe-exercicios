import React, { useState} from 'react';

function Form() {

  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [modulo, setModulo] = useState();

  return (
    <form>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={ ({target}) => setName(target.value) }
      />

      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={ ({target}) => setIdade(target.value) }
      />

      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={ ({target}) => setCidade(target.value) }
      />

      <label htmlFor="Fundamentos">
      Fundamentos
        <input
          type="radio"
          id="Fundamentos"
          value="Fundamentos"
          name="Fundamentos"
          checked={modulo === 'Fundamentos'}
          onChange={ ({target}) => setModulo(target.value)}
        />
      </label>
      <label htmlFor="Front-end">
      Front-end
        <input
          type="radio"
          id="Front-end"
          value="Front-end"
          name="Front-end"
          checked={modulo === 'Front-end'}
          onChange={ ({target}) => setModulo(target.value)}
        />
      </label>
      <label htmlFor="Back-end">
      Back-end
        <input
          type="radio"
          id="Back-end"
          value="Back-end"
          name="Back-end"
          checked={modulo === 'Back-end'}
          onChange={ ({target}) => setModulo(target.value)}
        />
      </label>
      <label htmlFor="Ciência da Computação">
      Ciência da Computação
        <input
          type="radio"
          id="Ciência da Computação"
          value="Ciência da Computação"
          name="Ciência da Computação"
          checked={modulo === 'Ciência da Computação'}
          onChange={ ({target}) => setModulo(target.value)}
        />
      </label>

      <input
        type="button"
        name="Submeter"
        value="Submeter"
      />
    </form>

  );
}

export default Form;