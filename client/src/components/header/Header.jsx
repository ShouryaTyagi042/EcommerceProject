import {AppBar,Toolbar,Box,styled,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
//componenets
import Search from './Search'
import CustomButton from './CustomButton'

const CustomHeader=styled(AppBar)`
background: linear-gradient(to bottom, #114b96, #7b4092, #b33373, #cc4147, #c46710);
height :55px;
`
const CustomBox=styled(Box)`
margin-left:12%;
line-height:0;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic`

const Component = styled(Link)`
font-size: 10px,
font-style: italics;
`

const PlusImg=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

//  const CustomButtonWrapper=styled(Box)`
//  margin:0 5% 0 auto;
// `

const Header=()=>{

    
    return (
        // <StyledHeader>
        //     <Toolbar style={{ minHeight: 55}}></Toolbar>
            <CustomHeader>
            <Toolbar style={{minHeight:55}}>
                <Component to= '/'>
            <img src='./vader.svg' style={ {width: 55}} />
                {/* <CustomBox>   
                    {/* replacement of div. It is basically a wrapper components */}
                    {/* <Box style={{display:'flex'}}>
                       
                    </Box> */}
                {/* </CustomBox> */}
                </Component> 
                <Search/>
                <Box>
                <CustomButton/>
                </Box>
                
            </Toolbar>
            </CustomHeader>
        // </StyledHeader>
    )
}
export default Header;