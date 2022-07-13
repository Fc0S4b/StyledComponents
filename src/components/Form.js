import React from 'react';
import styled, { css } from 'styled-components/macro';
const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <button>click me</button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <input type="text" />
        <button>submit here</button>
      </form>
    </div>
  );
};

export default Form;
