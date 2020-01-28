import styled from 'styled-components'

export const Button = styled.button`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 3px;
  padding: 5px;
  font-size: 14px;
`

export const ActionButton = styled.button`
  background: ${({theme}) => theme.color};
  color: ${({theme}) => theme.bg};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 3px;
  padding: 5px;
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
  background: none;
  color: inherit;
  border: none;
  &:hover {
    text-decoration: underline;
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