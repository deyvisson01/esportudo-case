import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  z-index: 1;
  width: 100vw;
  height: 80px;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  padding: 0 20px;

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
