import styled from 'styled-components/macro';
import { HipsterButton } from './components/Buttons';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <HipsterButton>click me</HipsterButton>
      <HipsterButton
        css={`
          color: green;
        `}
        as="a"
        href="https://www.google.com"
      >
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>
      {/* css como props por sí solo no funcionaría, se debe añadir al import de styled-components/macro */}
      {/* agregar /macro a las importaciones de styled-components creará nombre de clases mas descriptivas */}
      <div
        css={`
          color: green;
        `}
      >
        <h2>hello world</h2>
      </div>
    </div>
  );
}

export default App;
