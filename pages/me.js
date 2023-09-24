import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react' 
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/grid-items'
import Layout from '../components/layouts/article'

const Watashi = () => (
    <Layout title="About Me">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                About Me
            </Heading>
        </Container>
    </Layout>
)