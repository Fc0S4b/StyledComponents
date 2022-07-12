// npm install styled-components
import styled from 'styled-components';

import Button from '@mui/material/Button';

// extend react component or with import { styled } from '@mui/material/styles' and the old syntax;
const StyledBtn = styled(Button)`
  && {
    text-transform: capitalize;
  }
`;
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button color="primary" variant="contained">
        Hello World
      </Button>
      <StyledBtn color="primary" variant="contained">
        Hello World
      </StyledBtn>
    </div>
  );
}

export default App;
