import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import CartWidget from './CartWidget'
import Hooks from './hooks'
import { Link } from 'react-router-dom'

const NavBar = () => {
return(
    <>
    <Flex>
        <Box p='4'>
        <Link to={"/"}>   
        Drinkstore
        </Link>
        </Box>
        <Spacer>
        <Box p='4'>
            <Menu>
            <MenuButton>
                Tipo de bebidas
            </MenuButton>
            <MenuList>
                <MenuItem><Link to={`/categoria/${'Vino'}`}>Vino </Link></MenuItem>
                <MenuItem><Link to={`/categoria/${'Fernet'}`}>Fernet </Link></MenuItem>
                <MenuItem><Link to={`/categoria/${'Vodka'}`}>Vodka</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${'Gin'}`}>Gin</Link></MenuItem>
                <MenuItem><Link to={`/categoria/${'Whisky'}`}>Whisky </Link></MenuItem>
            </MenuList>
            </Menu>    
        </Box>
        </Spacer>
        <Box p='4'>
            <Link to={"/cart"}>
            <CartWidget/>
            </Link>
        </Box>
    </Flex>
    </>
)

}

export default NavBar