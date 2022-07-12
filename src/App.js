// npm install styled-components
import styled from 'styled-components';
import BasicTitle from './components/BasicTitle';
import { DefaultButton, HipsterButton } from './components/Buttons';
// en html se escriben nombres únicos de clases generados por styled-components

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <BasicTitle special>style component</BasicTitle>
      <BasicTitle>style component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
