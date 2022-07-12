// npm install styled-components
import styled from 'styled-components';

// tagged template literal
const BasicTitle = styled.h1`
  //uppercase, import.htmlElement
  text-transform: capitalize;
  text-align: center;
`;
// en html se escriben nombres únicos de clases generados por styled-components

const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem;
`;
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>style component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
