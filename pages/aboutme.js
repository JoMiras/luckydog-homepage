import { Container, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import Layout from '../components/layouts/article'
import ProgressBar from '../components/layouts/progressBar'
import Image from 'next/image'

import L1 from '../public/L1.JPG'
import L2 from '../public/L2.jpeg'
import L3 from '../public/L3.jpeg'

const Dedicated = () => {
    return (
        <Layout title="I dedicate this to you, my friend">
            <Container mt={{ base: '20px', md: '20px' }}>
                <Box borderRadius="lg" bg="pink.200" p={3} mb={6} align="center">
                    🐾  Lucky, The Shih-Tzu of all time  🐾
                </Box>

                <Section delay={.1}>
                    <Heading as="h2" variant="page-title" mb={4}>
                        My Best Friend / ベストフレンド
                    </Heading>
                    <Paragraph>
                        This little guy lived for over 18 years. 
                        To me, he was always around, he made me chase him when he ran outside, 
                        dug into the trash can for food like a raccoon,
                        he got lost one time, refused to let go of the rat poison in his mouth. 
                        The memories I can recount go on and on, and I smile on every single one of them
                        no matter how greedy he was. It's the reason why I began to see raccoons so differently,
                        I even decided to make it as part of my brand. A raccoon animal accompanied with the name: LuckyDog.
                        I still think about him from time to time, how could I not when he tagged along for a majority of my life,
                        there were so many times where my decisions revolved around him. I'll miss that little guy, he was such a delight.

                        <Box as="span" mt={4} display="block">
                            Wait for me up there, you probably stink right now. 
                        </Box>
                    </Paragraph>
                    <ProgressBar />
                </Section>

                <Section delay={.2}>
                    <Heading as="h3" variant="section-title" mb={4}>
                        Please enjoy these photos
                    </Heading>
                    <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={6}>
                        <Box>
                            <Image src={L1} alt="Young pup" width={400} height={400} layout="responsive" />
                        </Box>
                        <Box>
                            <Image src={L2} alt="Older pups" width={400} height={400} layout="responsive" />
                        </Box>
                        <Box>
                            <Image src={L3} alt="Older pups2" width={400} height={400} layout="responsive" />
                        </Box>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Dedicated
