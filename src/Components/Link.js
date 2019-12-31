import React from 'react'
import { Button } from '../Styles/StyledComponents'

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '7px',
      fontSize: '0.8em'
    }}
  >
    {children}
  </Button>
)

export default Link