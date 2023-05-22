import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import image_url from "../services/image-url";


const ShowGenreList = () => {
    const { genres } = useGenre();
    return (
        <>
            <List>
                <ListItem>
                    {
                        genres.map(genre =>
                            <HStack key={genre.id} paddingY="5px">
                                <Image boxSize="30px" borderRadius="10px" src={image_url(genre.image_background)} />
                                <Text>{genre.name}</Text>
                            </HStack>
                        )
                    }
                </ListItem>
            </List>
        </>
    )
}

export default ShowGenreList