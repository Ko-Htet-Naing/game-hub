import { HStack } from '@chakra-ui/layout'
import { Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp';

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='60px' />
            <Text fontSize='md'> Navbar </Text>
        </HStack>
    )
}

export default Navbar