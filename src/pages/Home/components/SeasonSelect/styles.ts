import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  height: 36px;
  width: 400px;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  svg {
    margin-top: 5px;
    margin-right: 6px;
    margin-left: 6px;
  }

  .icon-arrow svg {
  }
`

export const DropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const DropDownHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #e5bf00;
  min-width: 145px;
`

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 10px;
`

export const DropDownList = styled.ul`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  background: #32374c;
  color: #e5bf00;

  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fff;
  }
`
