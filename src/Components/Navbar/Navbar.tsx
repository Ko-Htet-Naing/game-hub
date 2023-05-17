import { HStack } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';
import ColorModeSwitch from '../ColorModeSwitch';

const Navbar = () => {
    return (
        <HStack justifyContent="space-between">
            <Image src={logo} boxSize='60px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar