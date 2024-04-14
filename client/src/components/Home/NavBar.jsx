import { Box,Typography,styled } from "@mui/material";


import { navData } from "../../constants/data";

const ModifiedNavBar= styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0px 130px',
justifyContent:'space-between',
overflow:'overlay',

[theme.breakpoints.down('lg')]:{
    margin:0
}
}))
const Conatiner=styled(Box)`
padding:12px 8px;
text-align:center;
`

const Text=styled(Typography)`
font-size:12px;
font-weight:575;
font-family: inter_semi_bold, fallback-inter_semi_bold, Arial, sans-serif;
`



const NavBar=()=>{
    return (
        <Box style={{ background: '#fff'}}>
        <ModifiedNavBar>
            {
                navData.map(data=> (
                    <Conatiner  >
                        <img src={data.url} alt="nav" style={{width:64}}/>
                        <Text>{data.text}</Text>
                    </Conatiner>
                ))
            }
        </ModifiedNavBar>
        </Box>
        )
}

export default NavBar;