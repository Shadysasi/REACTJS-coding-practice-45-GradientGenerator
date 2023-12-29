import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  width: 49%;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  background-color: #ffffff;
  font-size: 14px;
  font-size: 'Roboto';
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  border: none;
  margin-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  outline: none;
  cursor: pointer;
`
