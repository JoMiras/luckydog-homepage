import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './layouts/theme-toggle-button.js'

const LinkItem = ({ href, path, children, target, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue ('gray200', 'whiteAlpha.900')
    return (
     <Link 
     as={NextLink}
     href={href}
     scroll={false}
     p={2}
     bg={active ? 'grassTeal' : undefined}
     color={active ? '#202023' : inactiveColor}
     target={target}
     {...props}
     >
        {children}
     </Link>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box 
        position="fixed" 
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container display ="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
            <Stack
            direction={{ base: 'column', md: 'row' }}
            display = {{ base: 'none' , md: 'flex' }}
            width = {{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt= {{ base: 4, md: 0}}
            >

            <LinkItem href="/works" path={path}>
                Works
            </LinkItem>

            <LinkItem href="/interests" path={path}>
                Interests
            </LinkItem>

            <LinkItem href="aboutMe" path={path}>
                About Me
            </LinkItem>
            
            <Link href="https://github.com/JoMiras" isExternal>
                Source
            </Link>

             </Stack>
             <Box flex={1} align="right">
                <ThemeToggleButton />
                <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                <Menu>
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" 
                    />
                    <MenuList>
                        <MenuItem as='a' href='/works'>Works</MenuItem>
                        <MenuItem>Interests</MenuItem>
                        <MenuItem>About Me</MenuItem>
                        <MenuItem as='a' href='https://github.com/JoMiras/luckydog-homepage'>Source Info</MenuItem>
                        
                    </MenuList>
                </Menu>
                </Box>
             </Box>
            </Container>
        </Box>
    )
}

export default Navbar