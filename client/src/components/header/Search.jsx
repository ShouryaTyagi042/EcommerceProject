import { InputBase,Box,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


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
    return (
        <Searchbar>
            <InputSearchBase placeholder="Search for products"/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
        </Searchbar>
        
     )
}


export default Search;