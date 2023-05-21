import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import useFetch from '../hooks/useFetch';


const GameGrid = () => {
    const { errors, games } = useFetch();
    return (
        <>
            {errors && <Text> {errors} </Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
                {games.map(game => <GameCard game={game} key={game.id} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid