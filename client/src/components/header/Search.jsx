import { useState, useEffect } from "react";

import { InputBase,Box,styled, ListItem, List, ListItemText} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from "react-router-dom";



const Searchbar=styled(Box)`
background:#fff;
width:38%;
border-radius:5px;
margin-left:15px;
display:flex
`

const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
margin-top:4px
`

const InputSearchBase=styled(InputBase)`
margin-left:10px;
width:100%;
font-size:unset;

`

const Search=()=>{

    const [text,setText]=useState('');
    
    const { products } = useSelector(state => state.getProducts);
    const dispatch=useDispatch();

    useEffect(() => {  
        if (1) {
            dispatch(getProducts());
        }
    }, [dispatch])
    
    const getText = (text) => {
        setText(text);
    }

    const ListWrapper = styled(List)`
        position: absolute;
        background: #ffffff;
        color: #000;
        margin-top: 35px;

    `
    return (
        <Searchbar>
            <InputSearchBase
             placeholder="Search for products"
             onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            { 
                <ListWrapper>
                    {
                        text.length > 1 && 
                        products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
                            <ListItem>
                                <ListItemText>
                                    <Link 
                                    to={`/product/${product.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    onClick={() => setText('')}
                                    >
                                    {product.title.longTitle}
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        )
                        )
                    }
                </ListWrapper>
            }
        </Searchbar>
        
     )
}


export default Search;