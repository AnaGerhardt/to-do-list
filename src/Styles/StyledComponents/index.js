import styled from 'styled-components'

export const Button = styled.button`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
`

export const ActionButton = styled.button`
  background: ${({theme}) => theme.buttonbg};
  color: white;
  border: 1px solid ${({theme}) => theme.buttonbg};
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
`

export const MenuButton = styled.button`
  background: none;
  color: ${({theme}) => theme.color};
  border: none;
  border-right: 1px solid ${({theme}) => theme.color};
  padding: 2px 10px 2px 10px;
  &:hover {
    text-decoration: underline;
  }
`

export const TaskButton = styled.button`
  box-shadow: 0 5px 15px -8px grey;
  background: ${({theme}) => theme.taskbg};
  border-radius: 5px;
  margin-top: 8px;
  padding: 15px;
  color: ${({theme}) => theme.color};
  text-align: left;
  font-weight: 700;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

export const Table = styled.table`
   margin: 40px 0 40px 0; 
` 

export const Tr = styled.tr`
    border-bottom: 1px solid #AAAA;
` 

export const Td = styled.td`
    padding: 1vh 8vw 1vh 0vw;
`  