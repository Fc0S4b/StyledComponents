// npm install styled-components
import styled from 'styled-components';
import { HipsterButton } from './components/Buttons';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>click me</HipsterButton>
      {/* no funcionaría href porque href no es atributo de un elemento button como styled component, la solución es usar as igual al elemento html que deseas que sea*/}
      <HipsterButton as="a" href="https://www.google.com">
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
