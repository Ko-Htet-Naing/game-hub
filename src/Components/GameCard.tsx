import { GameOutput } from "./GameGrid"
import { CardBody, Card, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';

interface Props {
    game: GameOutput
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card borderRadius={10} overflow='hidden'>
                <Image src={game.background_image} />
                <CardBody> {game.name} </CardBody>
            </Card>

        </>
    )
}

export default GameCard