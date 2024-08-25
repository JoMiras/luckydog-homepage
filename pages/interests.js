import { Text, Container, Heading, SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const proficiencies = [
    { name: 'HTML & CSS ' },
    { name: 'JavaScript' },
    { name: 'SQL' },
    { name: 'Python'},
    { name: 'Swift'},
    { name: 'C++'}
]

const Proficiencies = () => {
    const bgColor = useColorModeValue('white', 'gray.700')
    const borderColor = useColorModeValue('gray.200', 'gray.500')

    return (
        <Layout title="Proficiencies">
            <Container mt={{ base: '20px', md: '20px' }}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Proficiencies
                </Heading>
                <Text>!This page is still under construction!</Text>
                <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                    {proficiencies.map((skill, index) => (
                        <Box
                            key={index}
                            p={6}
                            shadow="lg"
                            borderWidth="2px"
                            borderRadius="xl"
                            textAlign="center"
                            bg={bgColor}
                            borderColor={borderColor}
                            transition="transform 0.3s ease"
                            _hover={{ transform: 'scale(1.05)' }}
                        >
                            <Box Position = "relative" zIndex={1}>
                            <Text fontSize="xl" fontWeight="bold">
                                {skill.name}
                            </Text>
                        </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Proficiencies