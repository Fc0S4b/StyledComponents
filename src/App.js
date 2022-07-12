// npm install styled-components
import styled from 'styled-components';

// tagged template literal
const BasicTitle = styled.h1`
  //uppercase, import.htmlElement
  text-transform: capitalize;
  text-align: center;
`;
// en html se escriben nombres únicos de clases generados por styled-components
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle>style component</BasicTitle>
      <BasicTitle>style component</BasicTitle>
      <BasicTitle>style component</BasicTitle>
      <BasicTitle>style component</BasicTitle>
      <button className="btn">click me</button>
    </div>
  );
}

export default App;
