import { Box,styled } from "@mui/material"; 
import { Fragment } from "react";
import { useEffect } from "react";
//Component
import Banner from "./Banner";
import NavBar from "./NavBar";
import { getProducts } from "../../redux/actions/productAction";
import{ useDispatch,useSelector} from "react-redux"
import Slide from "./Slide";
import MidSection from "./MidSection";
const Component=styled(Box)`
padding:12px 10px;
background:#F2F2F2;
`
// useeffect will be called first->dispatch->getProducts in action->will call api->will dispatch values->values will go to the reducer->values will go the redux store
const Home=()=>{
    const {products}=useSelector(state=>state.getProducts)
    console.log(products)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <Fragment>
            {/* It does not create a extra node as in case of div and box */}
            <NavBar/>
            <Component>
            <Banner/>
            <Slide products={products} title="Exclusive deals for you!" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discount" timer={false}/>
            <Slide products={products}title="Recommended for you" timer={false}/>
            <Slide products={products} title="Top picks" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            </Component>
            
        </Fragment>
        
    )
}

export default Home;