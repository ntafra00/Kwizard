"use client"

import {
    Box,
    Link,
    Button,
    useMediaQuery
} from '@chakra-ui/react';
import { getNavigationLinks } from '@/utils/navigation';
import DesktopNavbar from './DesktopNav';
import MobileNavbar from './MobileNav';

import { useRouter } from 'next/navigation';
import { NavigationLink } from '@/typings';


export default function Navbar() {
    const [isLargerThanMediumScreen] = useMediaQuery('(min-width: 768px)');
    const router = useRouter();

    const handleButtonClick = (link: NavigationLink) => {
        if (!link.path) {
            return;
        }
        router.push(`/${link.path}`)
    }

    const renderNavigationLinks = () => {
        return getNavigationLinks(true).map((navigationLink) => {
            if (navigationLink.text === 'Profile' || navigationLink.text === 'Login') {
                return <Button bg={'white'} rounded='full' color='purple' onClick={() => handleButtonClick(navigationLink)}>{navigationLink.text}</Button>
            }

            if (navigationLink.text === 'Sign out' || navigationLink.text === 'Register') {
                return <Button colorScheme='purple' rounded='full' color='white' onClick={() => handleButtonClick(navigationLink)}>{navigationLink.text}</Button>
            }

            return <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                }}
                color={'white'}
                href={`/${navigationLink.path}`}>
                {navigationLink.text}
            </Link>
        })
    }

    return (
        <>
            <Box px={8}>
                {isLargerThanMediumScreen ? <DesktopNavbar navigationLinks={renderNavigationLinks()} /> : <MobileNavbar navigationLinks={renderNavigationLinks()} />}
            </Box>
        </>
    );
}