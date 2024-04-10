import { Box, Grid, styled } from "@mui/material"
import { imageURL } from "../../constants/data"


const Wrapper=styled(Grid)`
margin-top:12px;
justify-content:space-between;
`
// Grid is used to make the website responsive

const MidSection=()=>{

    return(
        <>
        <Wrapper lg={12} md={12} xs={12} xm={12}container>
            {
                imageURL.map(image=>(
                    
                    <Grid item lg={4} md={4}sm={12}xs={12}>
                    <img src={image} alt="midsec"style={{width:'100%'}}/>
                    </Grid>
                ))
            }
        </Wrapper>
        </>
    )


}

export default MidSection