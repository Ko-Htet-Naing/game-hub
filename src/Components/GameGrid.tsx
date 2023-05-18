import React, { useEffect, useState } from 'react'
import axiosInstance from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface GameOutput {
    id: number;
    rating: number;
    name: string;
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
            .then(res => setGames(res.data.results))
            .catch(err => setErrors(err.message))
    }, [])
    return (
        <>
            {errors && <Text> {errors} </Text>}
            <ul>
                {games.map(game => <li key={game.id}> {game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid