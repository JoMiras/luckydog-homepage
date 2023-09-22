import { Container , Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500, whiteAlpha.200')} p={3} mb={6} align="center" >
            Hello, I'm a full-stack developer based in California!
                </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonah Mirasol
                    </Heading>
                    <p>Software Developer ( Nature Connossieur / Creative / Problem Solver )</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center"
                >
                    <Image borderColor="whiteAlpha.800" borderWith={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="https://avatars.githubusercontent.com/u/132711477?v=4" alt="Profile Image" /> 
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Works
                </Heading>
                <Paragraph>
                Jonah is a dedicated coder on a journey to get his foot into the tech industry. 
                Through creations of various passion projects, he is able to utilize a creative mindset while solving problems within the development process. 
                My portfolio is a display of projects to come, and a showcase of projects that I have finished. 
                Additionally, I want to highlight my commitment to learning the art, being innovative, and learning about the possibilities that the Tech World can provide society in the future. 
                </Paragraph>
            </Section>
        </Container> 
    )
}

export default Page