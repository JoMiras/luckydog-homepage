import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layouts/section' 
import { WorkGridItem  } from '../components/grid-items'
import Layout from '../components/layouts/article'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
        </Container>
    </Layout>
)

export default Works