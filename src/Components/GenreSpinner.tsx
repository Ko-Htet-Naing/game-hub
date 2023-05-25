import { Skeleton, Spinner, HStack, SkeletonText, Card } from "@chakra-ui/react";

const GenreSpinner = () => {
    return (
        <>
            <Card>
                <HStack>
                    <Skeleton boxSize="30px" borderRadius="10px" />
                    <SkeletonText />
                </HStack>
            </Card>
        </>
    );
};

export default GenreSpinner;
