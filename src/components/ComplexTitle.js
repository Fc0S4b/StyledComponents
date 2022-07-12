import React from 'react';
import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    // <Wrapper className="bg-grey">
    <Wrapper className="bg-grey">
      <h1>{title}</h1>
      <div className="underline"></div>
      <h2 className="title">random</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: grey; se torna molestoso escribir la misma clase en cada wrapper entonces mejor setearlo como clase global en el index.css y darle la className por separado en el componente wrapper*/
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
  /* más específico, por lo que se aplica esta clase de title en vez de la que está en el index.css */
  .title {
    color: blue;
  }
`;

export default ComplexTitle;
