import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <img
        src="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1657665615&userId=usrQMwWEPx18KgLcP&cs=30f130f5a5c5dba6"
        alt="product"
      />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
      {/* <h4>random stuff</h4> */}
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      //more specific
      text-transform: capitalize;
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
  //no mas de un nivel anidado por que se torna muy específico
  /* h4 {
    color: blue;
  } */
`;

export default Card;
