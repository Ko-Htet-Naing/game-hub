import { List, ListItem, Image, HStack, Button, Box } from "@chakra-ui/react";
import useGenre, { Genres } from "../hooks/useGenre";
import image_url from "../services/image-url";
import GenreSpinner from "./GenreSpinner";

interface Props {
    onSelectGenre: (genre: Genres) => void;
}

const ShowGenreList = ({ onSelectGenre }: Props) => {
    const { genres, isloading } = useGenre();
    const genre_control = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <>


            {isloading && genre_control.map(genre => <div key={genre} style={{ marginTop: '5px', marginBottom: '5px' }}>
                <GenreSpinner />
            </div>)
            }
            <List>
                <ListItem>
                    {
                        genres.map(genre =>
                            <HStack key={genre.id} paddingY="5px">
                                <Image boxSize="30px" borderRadius="10px" src={image_url(genre.image_background)} />
                                <Button display="block" variant="link" onClick={() => onSelectGenre(genre)}>{genre.name} </Button>
                            </HStack>
                        )
                        // ghost, link 
                    }
                </ListItem>
            </List>
        </>
    )
}

export default ShowGenreList