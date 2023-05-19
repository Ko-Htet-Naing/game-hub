import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import DisplayIcons from './DisplayIcons';

export interface PlatformFormat {
    id: number;
    name: string;
    slug: string;
}

export interface GameOutput {
    id: number;
    rating: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatformFormat }[];
}

interface FetchGamesFormat {
    count: number;
    results: GameOutput[];
}

const GameGrid = () => {
    const [games, setGames] = useState<GameOutput[]>([]);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        axiosInstance.get<FetchGamesFormat>('/games')
            .then(res => {
                setGames(res.data.results);
            })
            .catch(err => setErrors(err.message))
    }, [])
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