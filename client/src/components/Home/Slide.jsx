import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { Box, Typography,styled,Button } from "@mui/material";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Deal=styled(Typography)`
padding:12px 18px;
display:flex;

`
const Time=styled(Box)`
margin-top:2px;
display:flex;
margin-left:10px;
font-weight:550;
align-item:center:
font-size:14px;
color:#7f7f7f;
`

const DealText=styled(Typography)`
font-size:18px;
font-weight:600;
`
const ViewButton=styled(Button)`
font-weight:600;
margin-left:auto;
// automatically align the element to the right
margin-bottom:4px;
box-shadow:0px 0px 0px 1px;
`

const Image=styled('img')({
    width:'auto',
    height:140

})
const Text=styled(Typography)`
font-size:13px
margin-top:2px`


const renderer=({hours,minutes,seconds})=>{
    return <Box varient="span">{hours}:{minutes}:{seconds} Remaining</Box>
}

const Slide=({ products,title ,timer})=>{
    //passing responsive as a prop
    return(
        <Box>
            <Deal>
                <DealText>{title}</DealText>
                { timer &&
                    <Time>
                        <AccessTimeOutlinedIcon style={{marginRight:10}}/>
                        <Countdown date={Date.now()+3.6e+7} renderer={renderer}/>
                    </Time>
                }
                <ViewButton variant="outlined">View All</ViewButton>
            </Deal>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                products.map(product=>(
                    <Link to = {`product/${product.id}`} style= {{ textDecoration : 'none'}}>
                    <Box textAlign="center" style={{padding:'25px 15px'}}>
                        <Image src={product.url} alt="products"/>
                        <Typography style={{fontWeight:600}}>{product.title.shortTitle}</Typography>
                        <Text style={{color:'#21a675'}}>{product.discount}</Text>
                        <Text style={{opacity:'.6'} }>{product.tagline}</Text>
                    </Box>
                    </Link>
                    
                ))
                }

            </Carousel>
        </Box>
    )


}
export default Slide;