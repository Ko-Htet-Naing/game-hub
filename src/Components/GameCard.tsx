import DisplayIcons from "./DisplayIcons";
import { GameOutput } from "./GameGrid";
import { CardBody, Card, Image, Heading, Text } from "@chakra-ui/react";

interface Props {
    game: GameOutput;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card borderRadius={10} overflow="hidden">
                <Image src={game.background_image} />
                <CardBody>
                    <Heading fontSize="2xl"> {game.name} </Heading>
                    <DisplayIcons platform={game.parent_platforms.map(item => item.platform)} />
                </CardBody>
            </Card>
        </>
    );
};

export default GameCard;
