import NextLink from 'next/link'
import { Box, Heading, Container, Divider, Button, Text } from '@chakra-ui/react'

const Empty = () => {
    return (
    <Container> 
        <Heading as="h1">Uh-oh, this is empty.</Heading>
        <Text>The page you were looking for was not found. I'm so sorry! </Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <NextLink href="/">
                <Button colorScheme='teal'>Return to my homepage</Button>
            </NextLink>
        </Box>
    </Container>
    )
}
export default Empty 