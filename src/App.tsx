import { Grid, GridItem, Hide, Show, useBreakpointValue } from '@chakra-ui/react';

const App = () => {
  return (
    <>
      <Grid templateAreas={{
        base: ` "nav" "main"`,
        lg: `"nav nav" "aside main"`
      }} color='blackAlpha.700'>
        <GridItem area={'nav'} bg='orange.300'>Nav</GridItem>
        {/* {isLargeScreen &&
        } */}
        <Show above='lg'>
          <GridItem area={'aside'} bg='pink.300'>Aside</GridItem>
        </Show>

        <GridItem area={'main'} bg='green.300'>Main</GridItem>
      </Grid>
    </>
  )

}

export default App