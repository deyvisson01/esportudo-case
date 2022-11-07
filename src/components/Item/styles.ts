import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  border-radius: 10px;
  z-index: 1;
  height: 100px;
  width: 100px;
  position: relative;
  cursor: pointer;

  background: var(--background-secundary-lg);

  h1 {
    font-size: 1.8rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;

    color: var(--white);
  }
`
