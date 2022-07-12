import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
  color: ${(props) =>
    props.special &&
    'red'}; //usando prop con lógica para aplicarla al componente con special
`;

export default BasicTitle;
