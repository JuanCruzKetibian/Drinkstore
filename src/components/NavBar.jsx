import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import CartWidget from './CartWidget'

const NavBar = () => {
return(
    <>
    <Flex>
        <Spacer>
        <Box p='4'>
            <Menu>
            <MenuButton>
                Tipo de bebidas
            </MenuButton>
            <MenuList>
                <MenuItem>Vino </MenuItem>
                <MenuItem> Fernet </MenuItem>
                <MenuItem>Vodka </MenuItem>
                <MenuItem>Gin </MenuItem>
                <MenuItem>Whisky </MenuItem>
            </MenuList>
            </Menu>    
        </Box>
        </Spacer>
        <Box>
            <CartWidget/>   
        </Box>
    </Flex>
    </>
)

}

export default NavBar