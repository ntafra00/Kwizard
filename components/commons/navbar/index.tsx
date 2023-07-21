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
import { LoginCard } from '@/components/auth';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
    const [isLargerThanMediumScreen] = useMediaQuery('(min-width: 768px)');
    const router = useRouter();
    const { currentUser, toggleModal, logout } = useAuth();

    const handleButtonClick = async (link: NavigationLink) => {

        if (link.text === 'Sign out') {
            console.log('Hello')
            try {
                await logout();
            } catch (error) {
                console.log(error);
            } finally {
                return;
            }
        }

        if (link.text === 'Login' || link.text === 'Register') {
            toggleModal();
        }

        if (!link.path) {
            return;
        }

        router.push(`/${link.path}`)
    }

    const renderNavigationLinks = () => {
        return getNavigationLinks(!!currentUser).map((navigationLink) => {
            if (navigationLink.text === 'Profile' || navigationLink.text === 'Login') {
                return <Button rounded='full' variant={'outline'} colorScheme="blackAlpha" onClick={() => handleButtonClick(navigationLink)}>{navigationLink.text}</Button>
            }

            if (navigationLink.text === 'Sign out' || navigationLink.text === 'Register') {
                return <Button rounded='full' variant={'outline'} colorScheme="blackAlpha" onClick={() => handleButtonClick(navigationLink)}>{navigationLink.text}</Button>
            }

            return <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                }}
                color={'#000000'}
                fontWeight={'bold'}
                href={`/${navigationLink.path}`}>
                {navigationLink.text}
            </Link>
        })
    }

    return (
        <>
            <Box pr={120} pl={90}>
                {isLargerThanMediumScreen ? <DesktopNavbar navigationLinks={renderNavigationLinks()} /> : <MobileNavbar navigationLinks={renderNavigationLinks()} />}
            </Box>
            <LoginCard />
        </>
    );
}