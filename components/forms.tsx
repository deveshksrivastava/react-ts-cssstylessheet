import * as React from 'react';
import styled from 'styled-components';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 1.25rem;
    background: var(--primary); //glable css from index.css
    margin: 0 auto;
  }
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    width: 10px;
    border: var(--mainBorder);
  }
`;

export default ComplexTitle;
