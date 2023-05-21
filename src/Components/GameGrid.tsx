import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useFetch from "../hooks/useFetch";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardWrapper from "./GameCardWrapper";

const GameGrid = () => {
    const { errors, games, isLoading } = useFetch();
    const skeletons = [1, 2, 3, 4, 5, 6];
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
