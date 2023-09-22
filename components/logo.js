import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import pawPrint from '../public/PngItem_469932.png'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-iems: center;
height: 45px;
line-height: 35px;
padding: 10px;

> svg {
    transition: 200ms ease;
}

&:hover > img{
    transform: rotate(20deg);

 }
`

const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
                <LogoBox>
                    <Image src={pawPrint} alt="Paw" width={30} height={30} />
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900' )}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight="bold" 
                fontSize="14px"
                letterSpacing=".03em"
                ml={3}
                >
                    Jonah Mirasol
                </Text>
                </LogoBox>
        </Link>)
    );

}

export default Logo