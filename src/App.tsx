import { Grid, GridItem, Show, Spinner } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import GameGrid from './Components/GameGrid';
import { useColorMode } from '@chakra-ui/react';
import ShowGenreList from './Components/ShowGenreList';
import './App.css';

const App = () => {
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
            <ShowGenreList />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )

}

export default App