import { Typography, Box, styled } from '@mui/material'


const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
`
const LeftComponent = styled(Box)`
    margin: 20px;
`

export default function CartItem({item}) {
  return (
    <Component>
        <LeftComponent>
            <img 
            src={item.url}
            alt="product image">
            </img>
        </LeftComponent>
        <Box>
            <Typography>
                {item.title.longTitle}
            </Typography>

            <Typography>
                Sold by <b>{item.seller}</b>
            </Typography>
        </Box>
    </Component>
  )
}
