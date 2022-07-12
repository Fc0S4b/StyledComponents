import styled from 'styled-components';

const BasicTitle = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

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
