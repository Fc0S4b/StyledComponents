import React from 'react';
import styled, { css } from 'styled-components/macro';
// attrs es para manejar los atributos de los componentes, evitar repeticiones o hacer configuraciones generales
// hacer con objetos hace que todos los botones por default sean de tipo button, para dejar que el btn del form sea submit, se debe hacer con funciones, esta reaccionará de acuerdo al type='submit' que pasa como props al componente
// const Button = styled.button.attrs({
//   type: 'button',
// })...
const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
`;
const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <input type="text" />
        <Button type="submit">submit here</Button>
      </form>
    </div>
  );
};

export default Form;
