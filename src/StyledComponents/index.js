import styled from 'styled-components'

export const Button = styled.button`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.color};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 3px;
  padding: 5px;
`

export const ActionButton = styled.button`
  background: ${({theme}) => theme.color};
  color: ${({theme}) => theme.bg};
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 3px;
  padding: 5px;
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