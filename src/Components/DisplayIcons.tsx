import { HStack, Icon } from '@chakra-ui/react';
import { BsXbox, BsPlaystation, BsWindows, BsAndroid, BsGlobe, BsApple } from 'react-icons/bs';
import { DiLinux } from 'react-icons/di';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';
import { PlatformFormat } from './GameGrid';

interface Props {
    platform: PlatformFormat[];
}

const DisplayIcons = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: BsWindows,
        playstation: BsPlaystation,
        xbox: BsXbox,
        nintendo: SiNintendo,
        mac: BsApple,
        linux: DiLinux,
        android: BsAndroid,
        web: BsGlobe,
    }
    return (
        <HStack marginY={1}>
            {platform.map(p => <Icon key={p.id} as={iconMap[p.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default DisplayIcons