import { Container , Box, Heading, useColorModeValue, Link, chakra, Button, Image, List, ListItem} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import NextLink from 'next/link' 
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection , BioYear } from '../components/bio'
import {
    IoLogoGithub, IoLogoLinkedin, IoMailSharp
} from 'react-icons/io5'

const Profile = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop) 
})
const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" 
            bg={useColorModeValue('#ffc100', 'whiteAlpha.200')} 
            p={3} mb={6} 
            align="center" 
            boxShadow="md" 
            color={useColorModeValue('black', 'white' )} 
            mt={6}
            >
            Hello, I&apos;m a full-stack developer based in California!
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
                    <Profile borderColor="whiteAlpha.800"
                     borderWidth={2} borderStyle="solid" 
                     maxWidth="100px" maxHeight="100px" 
                     display="inline-block" borderRadius="full" 
                     src="/JonahM.jpeg" alt="Profile Image" 
                     />

                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Introduction
                </Heading>
                <Paragraph>
                Jonah is a dedicated coder on a journey to get his foot into the tech industry. 
                Through creations of various passion projects, he is able to utilize a creative mindset while solving problems within the development process. 
                My portfolio is a display of projects to come, and a showcase of projects that I have finished. 
                Additionally, I want to highlight my commitment to learning the art, showcase innovation, and learning about the possibilities that the Tech World can provide society in the future. 
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme='green'>
                        My current projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={.2}>
                <Heading as="h3" variant="section-title" >
                    Timeline
                </Heading>
                <BioSection>
                    <BioYear>2012-2016</BioYear>
                    Space and Engineering Academy at Merrill F West High
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Oracle Human Capital Management 6 months training
                </BioSection>
                <BioSection>
                    <BioYear>2023 to present</BioYear>
                    Began Software Developer Internship with Bay Valley Tech
                </BioSection>
                <BioSection>
                    <BioYear>2023 to present</BioYear>
                    Working as an Operations Specialist for Bay Valley Tech
                </BioSection>
            </Section>

            <Section delay={.3}>
                <Heading as="h3" variant="section-title">
                    My Interests
                </Heading>
                <Paragraph>
                    <Link href ="https://unsplash.com/s/photos/yosemite-national-park" isExternal >
                        Yosemite National Park,
                    </Link>
                     { ' '} Music, {' '}
                    <Link href="https://drive.google.com/drive/folders/14FdKf3W45YHqAjhTo_OB7ndrqL_9c-7o?usp=sharing" isExternal >
                        Photography
                    </Link>
                    , Developing Projects, User Interface, and Dogs❣️
                </Paragraph>
            </Section>

            <Section delay={.3}>
                <Heading as="h3" variant="section-title">
                    Connect with me!
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/JoMiras" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub /> }
                            >
                                @JoMiras
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://linkedin.com/in/jonah-mirasol-66a56a178" target="_blank">
                        <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoLinkedin /> }
                        >
                            @Jonah Mirasol
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem> 
                        <Link href="mailto:jonamiraso@gmail.com" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<IoMailSharp /> }
                            >
                                Have a question? Email me here!
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container> 
        </Layout>

    )
}


export default Page