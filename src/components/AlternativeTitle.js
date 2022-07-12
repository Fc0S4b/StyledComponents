import React from 'react';
import styled from 'styled-components';
import { colors, setupBorder } from '../utils';
const ComplexTitle = ({ title, className }) => {
  // console.log(props); title and className, tienes que tener el parámetro de props

  return (
    <div className={className}>
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </div>
  );
};

// al extender hacia el componente react, en props se pasa tanto el contenido como la clase del elemento
const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    /* acceder a la variable con interpolación */
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    height: 10px;
    border: ${setupBorder({ width: 5, color: 'green' })};
  }
`;

export default Wrapper;
