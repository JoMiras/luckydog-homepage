import { Container , Box, Heading, useColorModeValue, Link, chakra, Button, Image, List, ListItem} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import NextLink from 'next/link' 
import Layout from '../components/layouts/article'
import ProgressBar from '../components/layouts/progressBar'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear , BioList, SubBioList} from '../components/bio'
import {
    IoLogoGithub, IoLogoLinkedin, IoMailSharp
} from 'react-icons/io5'
import { SiKofi } from "react-icons/si"; 

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
            Hello, I&apos;m a Full-stack developer based in California!
                </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonah Mirasol
                    </Heading>
                    <p>Fullstack Software Developer (He / Him / His)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center"
                >
                    <Profile borderColor="whiteAlpha.800"
                     borderWidth={2} borderStyle="solid" 
                     maxWidth="150px" maxHeight="200px" 
                     display="inline-block" borderRadius="full" 
                     src="/YosemiteImage.jpeg" alt="Profile Image" 
                     />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Introduction
                </Heading>
                <Paragraph>
                 Welcome to my page! 
                I am a dedicated coder pursuing a career path in the tech industry. 
                Being first exposed to programming robots during my Sophomore in high school. 
                It was hard at first, and little did I know that that first exposure would be the foundation
                of my understanding of coding syntax and code structure. 
                Once I began taking classes in college as well as registering for a coding bootcamp known as Bay Valley Tech.
                Upon completion of various projects utilizing HTML & CSS, JavaScript, Python, and SQL. 
                It only cultivated my love and passion for developing projects because I realized that the possibilities that coding projects have are endless. 
                Hopefully you may find some use and/or enjoyment of my creations, I take great pride in my work! <br></br>

                <br></br> - Jonah Mirasol

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
                    My Timeline
                </Heading>
                
                <BioList>
                    <li>
                        <BioYear>Space and Engineering Academy</BioYear>
                        <SubBioList>
                            <li>Merrill F. West High (2012-2016)</li>
                        </SubBioList>
                    </li>


                    <li>
                        <BioYear>Oracle Human Capital Management training program</BioYear>
                        <SubBioList>
                            <li>GenSpark (June - September 2022)</li>
                        </SubBioList>
                    </li>

                    <li>
                        <BioYear>Software Developer Intern</BioYear>
                        <SubBioList>
                            <li>Bay Valley Tech (January 2023 - August 2024)</li>
                        </SubBioList>
                    </li>

                    <li>
                        <BioYear>Operation Specialist</BioYear>
                        <SubBioList>
                            <li>Bay Valley Tech (June 2023 - August 2024)</li>
                        </SubBioList>
                    </li>

                    <li>
                        <BioYear>SCRUM Master</BioYear>
                        <SubBioList>
                            <li>Bay Valley Tech (February 2024 - August 2024)</li>
                        </SubBioList>
                    </li>

                    <li>
                        <BioYear>Autonomous Vehicle Operator L5</BioYear>
                        <SubBioList>
                            <li>Zoox (August 2024 - Present) </li>
                        </SubBioList>
                    </li>

                </BioList>
            </Section>

            <Section delay={.3}>
                <Heading as="h3" variant="section-title">
                    My Interests
                </Heading>
                <Paragraph>
                   Olympic Weightlifting, Developing projects, Dogs❣️, Astronomy, 
                   and appreciating nature. 
                   Because I&#39;m such a curious individual,
                   I have an endless amount of topics and interest in every
                   nook and cranny. There&apos;s just so much that life has to offer you know?
                </Paragraph>
                <ProgressBar></ProgressBar>
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
                        <Link href="https://ko-fi.com/pythias1998" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<SiKofi /> }
                            >
                                Buy me a Kofi?
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem> 
                        <Link href="mailto:jonamiraso@gmail.com" target="_blank">
                            <Button variant="ghost" colorScheme='teal' leftIcon={<IoMailSharp /> }
                            >
                                If you need advice or if you have any questions, email me here!
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