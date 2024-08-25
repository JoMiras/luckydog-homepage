import { Text, Container, Heading, SimpleGrid, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const proficiencies = [
    { name: 'HTML & CSS '},
    { name: 'JavaScript' },
    { name: 'SQL' },
    { name: 'Python'},
    { name: 'Swift'},
    { name: 'C++'}
]

const Proficiencies = () => (
    <Layout title="Proficiencies"> 
    <Container mt={{ base: '20px', md: '20px' }}>  
        <Heading as="h3" fontSize={20} mb={4}>
        Proficiencies
        </Heading>
        <SimpleGrid columns={[1,2,3]} spacing = {10}>
            {proficiencies.map((skill, index) => (
                <Box
                key = {index} 
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                textAlign="center"
                bg={useColorModeValue('white', 'gray.700')}
                >
                    <Text fontSize="xl" fontWeight="bold">
                        {skill.name}
                    </Text>
                </Box>
            ))}
                </SimpleGrid>
                </Container>
                </Layout>
)
export default Proficiencies