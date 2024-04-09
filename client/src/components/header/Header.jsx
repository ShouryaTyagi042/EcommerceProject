import {AppBar,Toolbar,Box,styled,Typography} from '@mui/material'
//componenets
import Search from './Search'
import CustomButton from './CustomButton'

const CustomHeader=styled(AppBar)`
background:#2874f0;
height :55px;
`
const CustomBox=styled(Box)`
margin-left:12%;
line-height:0;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic`

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
        <div>
            <CustomHeader>
            <Toolbar style={{minHeight:55}}>
                {/* <CustomBox>   */}
                    {/* replacement of div. It is basically a wrapper components */}
                    {/* <Box style={{display:'flex'}}> */}
                       
                    {/* </Box> */}
                {/* </CustomBox> */}
                <Search/>
                <Box>
                <CustomButton/>
                </Box>
                
            </Toolbar>
            </CustomHeader>
        </div>
    )
}
export default Header;