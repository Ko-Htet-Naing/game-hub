import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";


const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack pr='5'>
            <Switch isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} colorScheme='green' />
            <Text color={colorMode === 'dark' ? 'white' : 'dark'}> Dark Mode </Text>
        </HStack>
    )
}

export default ColorModeSwitch