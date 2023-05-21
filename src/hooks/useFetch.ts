import { useState, useEffect } from "react";
import axiosInstance from "../services/api-client";
import { CanceledError } from "axios";

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
    metacritic: number;
}

interface FetchGamesFormat {
    count: number;
    results: GameOutput[];
}

const useFetch = () => {
    const [games, setGames] = useState<GameOutput[]>([]);
    const [errors, setErrors] = useState('');
    
    useEffect(() => {
        const controller = new AbortController();
        axiosInstance.get<FetchGamesFormat>('/games',{signal : controller.signal})
            .then(res => {
                setGames(res.data.results);
                console.log(res.data.results);
            })
            .catch(err => {
                if(err instanceof CanceledError) return ;
                setErrors(err.message)})
        return ()=> controller.abort();
    }, []);

    return {games,errors}
}
export default useFetch;