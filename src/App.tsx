import { Grid, GridItem, Show, Spinner } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import GameGrid from './Components/GameGrid';
import { useColorMode } from '@chakra-ui/react';
import ShowGenreList from './Components/ShowGenreList';
import './App.css';
import { Genres } from './hooks/useGenre';
import { useState } from 'react';
import PlatformMenu from './Components/PlatformMenu';

export interface GameQuery {
  genre: Genres | null;
}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid templateAreas={{
        base: ` "nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
        color={colorMode === 'light' ? 'dark' : 'light'}>
        <GridItem area={'nav'}>
          <Navbar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <ShowGenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <PlatformMenu />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )

}

export default App