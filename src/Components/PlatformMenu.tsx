import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'

const PlatformMenu = () => {
    const { games } = usePlatform();
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {games.length > 0 ?
                    games.map(game => <MenuItem key={game.id}>
                        {game.name}
                    </MenuItem>) :
                    <MenuItem>
                        Network Error
                    </MenuItem>
                }
            </MenuList>
        </Menu>
    )
}

export default PlatformMenu