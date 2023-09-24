import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/layouts/section' 
import { WorkGridItem  } from '../components/grid-items'
import Layout from '../components/layouts/article'

import thumbAlumni from '../public/images/works/Otters.png'
import EyeSpy from '../public/images/works/EyeSpy.png'
import chessmess from '../public/images/works/chess.avif'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="alumni" title="BVT Alumni Page" thumbnail={thumbAlumni}>
                        Website intended to display the success of Bay Valley Tech by showing the outcomes of some of our students.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="discord" title="Discord Bot" thumbnail={EyeSpy}>
                        Discord Bot created for the purpose to time track in the format of [Day, Date, Time] [Username] logged their hours.
                    </WorkGridItem>
                    </Section>

                    <Section delay={.1}>
                    <WorkGridItem id="chess" title="ChessMess" thumbnail={chessmess}>
                        A Chess game under development with my own rules and twists!
                    </WorkGridItem>
                    </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works