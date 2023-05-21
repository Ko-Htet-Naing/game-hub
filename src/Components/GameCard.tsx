import CriticScore from "./CriticScore";
import DisplayIcons from "./DisplayIcons";
import { CardBody, Card, Image, Heading, Text, HStack } from "@chakra-ui/react";
import image_url from "../services/image-url";
import { GameOutput } from "../hooks/useFetch";

interface Props {
    game: GameOutput;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card>
                <Image src={image_url(game.background_image)} />
                <CardBody>
                    <Heading fontSize="2xl"> {game.name} </Heading>
                    <HStack justifyContent={"space-between"}>
                        <DisplayIcons platform={game.parent_platforms.map(item => item.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

export default GameCard;
