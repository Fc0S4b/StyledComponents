import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
  /* color: ${(props) =>
    props.special &&
    'red'}; //usando prop con lógica para aplicarla al componente con special */
  /* color: ${({ special }) => special && 'red'}; //otra forma */
  color: ${({ special }) => (special ? 'red' : 'blue')}; //con operador ternario
`;

export default BasicTitle;
