import { Grid, GridItem, Hide, Show, useBreakpointValue } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import GameGrid from './Components/GameGrid';
import { useColorMode } from '@chakra-ui/react';
import GenreLists from './Components/GenreLists';

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid templateAreas={{
        base: ` "nav" "main"`,
        lg: `"nav nav" "aside main"`
      }} color={colorMode === 'light' ? 'dark' : 'light'}>
        <GridItem area={'nav'}>
          <Navbar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'}>
            <GenreLists />
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