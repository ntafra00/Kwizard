"use client"

import {
    Box,
    Link,
    useMediaQuery
} from '@chakra-ui/react';

import { getNavigationLinks } from '@/utils';
import DesktopNavbar from './DesktopNav';
import MobileNavbar from './MobileNav';

import { useRouter } from 'next/navigation';
import { NavigationLink } from '@/typings';
import { useAuth } from '@/contexts/AuthContext';

import { Button } from '../buttons';
import { Modal } from '../modals/Modal';
import { ModalScene } from '@/enums';
import { COMMON_PAGE_PADDING } from '@/constants';

export default function Navbar() {
    const [isLargerThanLargeScreen] = useMediaQuery('(min-width: 1150px)');
    const router = useRouter();
    const { currentUser, toggleModal, logout, handleModalSceneChange } = useAuth();

    const handleButtonClick = async (link: NavigationLink) => {

        if (link.text === 'Sign out') {
            try {
                await logout();
            } catch (error) {
                console.log(error);
            }
        }

        if (link.text === 'Login') {
            toggleModal();
            handleModalSceneChange(ModalScene.LOGIN)
        }

        if (link.text === 'Register') {
            toggleModal();
            handleModalSceneChange(ModalScene.REGISTER)
        }

        if (!link.path) {
            return;
        }

        router.push(`/${link.path}`)
    }

    const redirectToHomePage = () => {
        router.push("/");
    }

    const renderNavigationLinks = () => {
        return getNavigationLinks(!!currentUser).map((navigationLink) => {
            if (navigationLink.text === 'Profile' || navigationLink.text === 'Login') {
                return <Button textColor="blue" text={navigationLink.text} buttonAction={() => handleButtonClick(navigationLink)} />
            }

            if (navigationLink.text === 'Sign out' || navigationLink.text === 'Register') {
                return <Button backgroundColor="blue" textColor="white" text={navigationLink.text} buttonAction={() => handleButtonClick(navigationLink)} />
            }

            return <Link
                _hover={{
                    textDecoration: 'underline',
                }}
                color="black"
                fontWeight="medium"
                fontSize="sm"
                href={`/${navigationLink.path}`}>
                {navigationLink.text}
            </Link>
        })
    }

    return (
        <>
            <Box px={COMMON_PAGE_PADDING}>
                {isLargerThanLargeScreen ? <DesktopNavbar navigationLinks={renderNavigationLinks()} /> : <MobileNavbar navigationLinks={renderNavigationLinks()} />}
            </Box>
            <Modal />
        </>
    );
}