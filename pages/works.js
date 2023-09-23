import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layouts/section' 
import { WorkGridItem  } from '../components/grid-items'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    /* sssssss */
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works