import { Container , Box, Heading } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="turquoise" p={3} mb={6} align="center" >
            Hello, I'm a full-stack developer based in California!
                </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonah Mirasol
                    </Heading>
                    <p>Software Developer ( Nature Connossieur / Imaginative / Problem Solver )</p>
                </Box>
            </Box>
        </Container> 
    )
}

export default Page