import React from 'react'
import useGenre from '../hooks/useGenre'

const GenreLists = () => {
    const { genres } = useGenre();
    return (
        <ul>
            {genres.map(genre => <li key={genre.id}> {genre.name} </li>)}
        </ul>
    )
}

export default GenreLists