import styled from 'styled-components'

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 220px;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: center;

  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;

  background: var(--white);
`
