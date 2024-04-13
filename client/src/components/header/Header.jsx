import React, { useState } from 'react';
import { AppBar, Toolbar, Box, styled, Typography, Drawer, IconButton, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
//componenets
import Search from './Search';
import CustomButton from './CustomButton';

const CustomHeader = styled(AppBar)`
    background: linear-gradient(to bottom, #3F51B5, #9C27B0);
    height: 55px;
`;

const CustomBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const Component = styled(Link)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            ((event.key === 'Tab' || event.key === 'Shift'))
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleClick = () => {
        alert('You clicked me!');
    }

    const list = () => (
        <Box style={{width: 800}} onClick={handleClick}>
            <List>
                <Button>
                    <CustomButton />
                </Button>
            </List>
            {/* <Button component={ListItem} onClick={handleClick}>
                      
                        <CustomButton />
                    </Button> */}
                    {/* <Button component={ListItem} onClick={handleClick}>
                        <ListItemText primary="Item 2" />
                    </Button> */}
                {/* Add more list items as needed */}
        </Box>
    )

    return (
        <React.Fragment>
            <CustomHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Component to='/'>
                        <img src='./vader.svg' style={{ width: 55 }} />
                    </Component>
                    <Search />
                    <CustomButtonWrapper>
                        <Box>
                            <CustomButton />
                        </Box>
                    </CustomButtonWrapper>
                </Toolbar>
            </CustomHeader>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ '& .MuiDrawer-paper': { width: 250 } }}
            >
             <List>
                    <ListItem>
                        { list() }
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default Header;
