import { Container, Heading, SimpleGrid } from '@chakra-ui/react' 
import Section from '../components/layouts/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-items'

import Alamere from '../public/Alamere.jpeg'
import Pinecrest from '../public/Pinecrest.jpeg'

const AboutMe = () => (
    <Layout title="About Me">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
            Places I&apos;ve been to
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Alamere Falls"
                        thumbnail={Alamere}
                        href="https://www.nps.gov/pore/planyourvisit/alamere_falls.htm"
                    />
                    <GridItem 
                        title="Pinecrest"
                        thumbnail={Pinecrest}
                        href="https://www.recreation.gov/camping/campgrounds/232254"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default AboutMe
