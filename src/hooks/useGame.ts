import { GameQuery } from "../App";
import useFetch from "./useFetch";

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

const useGame = (gameQuery: GameQuery) => {
    return (
        useFetch<GameOutput>(
            "/games", {
            params: {
                genres: gameQuery.genre?.id,
            },
        },
            [gameQuery]
        )
    )
}
export default useGame;