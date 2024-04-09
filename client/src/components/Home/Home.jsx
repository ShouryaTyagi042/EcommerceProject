import { Box,styled } from "@mui/material"; 
import { Fragment } from "react";

//Component
import Banner from "./Banner";
import NavBar from "./NavBar";


const Component=styled(Box)`
padding:12px 10px;
background:#F2F2F2;
`

const Home=()=>{
    return (
        <Fragment>
            {/* It does not create a extra node as in case of div and box */}
            <NavBar/>
            <Component>
            <Banner/>
            </Component>
            
        </Fragment>
        
    )
}

export default Home;