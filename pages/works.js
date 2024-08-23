import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/layouts/section' 
import { WorkGridItem  } from '../components/grid-items'
import Layout from '../components/layouts/article'
import ProgressBar from '../components/layouts/progressBar'

import thumbAlumni from '../public/images/works/Otters.png'
import EyeSpy from '../public/images/works/EyeSpy.png'
import chessmess from '../public/images/works/chess.avif'
import studysphere from '../public/images/works/globe.png'
import hydrohomie from '../public/images/works/hydroMan.jpg'

const Works = () => (
    <Layout title="Works">
        <Container mt={{ base: '20px', md: '20px' }}>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <ProgressBar>
                </ProgressBar>
            <Section>
                    <WorkGridItem
                        id="alumni"
                        title="BVT Alumni Page"
                        thumbnail={thumbAlumni}
                    >
                        Website intended to display the success of Bay Valley Tech by showing the outcomes of some of our students.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem id="discord" title="Discord Bot" thumbnail={EyeSpy}>
                        Discord bot created for the purpose to time track in the format of [Day, Date, Time] [Username] logged their hours.
                    </WorkGridItem>
                    </Section>

                    <Section delay={.1}>
                    <WorkGridItem id="chess" title="ChessMess" thumbnail={chessmess}>
                        A Chess game under development with my own rules and twists!
                    </WorkGridItem>
                    </Section>

                <Section>
                    <WorkGridItem id="stsphere" title="StudySphere" thumbnail={studysphere}>
                        A white label Learning Module System (LMS) built as an intention to function similarily 
                        to Khan Academy with extra features. Some features being able to enable webcam calls to mimic
                        a classroom environment. 
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="hydrohomie" title="HydroHomie" thumbnail={hydrohomie}>
                        A Discord bot I am devloping that acts as a reminder by sending messages
                        in your server. There are a couple of features that I am working on implementing as well
                        in addition to providing periodic reminders. 
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works