import React from 'react'
import { Typography, Button, ButtonGroup, Box, styled } from '@mui/material'



const Component = styled(ButtonGroup)`
  margin-top: 30px;
`

const StyledButton = styled(Button)`
  border-radius: 50%;
`
export default function GroupedButton() {
  return (
   <Component>
    <StyledButton>
        -
    </StyledButton>

    <Button disabled> 1 </Button>

    <StyledButton>
        +
    </StyledButton>
   </Component>
  )
}
