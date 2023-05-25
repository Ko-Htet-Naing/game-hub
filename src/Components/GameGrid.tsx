import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardWrapper from "./GameCardWrapper";
import { Genres } from "../hooks/useGenre";
import useGame from "../hooks/useGame";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { errors, games, isLoading } = useGame(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {errors && <Text> {errors} </Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={10}
                padding="10px"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardWrapper key={skeleton}>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardWrapper>
                    ))}
                {games.map((game) => (
                    <GameCardWrapper key={game.id}>
                        <GameCard game={game} key={game.id} />
                    </GameCardWrapper>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
