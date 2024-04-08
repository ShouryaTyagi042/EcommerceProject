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

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <div>
            <CustomHeader>
            <Toolbar style={{minHeight:55}}>
                <CustomBox>  
                    {/* replacement of div. It is basically a wrapper components */}
                    <img src={logoURL} alt="logo" style={{
                        width:75
                    }}/>
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore&nbsp; 
                            {/* to give space between explore and plus */}
                            <Box component="span" style={{
                                color:'#FFE500'
                            }}>
                                 Plus
                            </Box>
                            </SubHeading>
                            <PlusImg src={subURL} alt='Plus'/>
                        {/* replacement of "p" tag in mui */}
                    </Box>
                </CustomBox>
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