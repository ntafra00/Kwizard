"use client"

import {
    Box,
    Link,
    Button,
    useMediaQuery,
} from "@/components/chakra";

import { getNavigationLinks } from '@/utils';
import DesktopNavbar from './DesktopNav';
import MobileNavbar from './MobileNav';

import { useRouter, usePathname } from 'next/navigation';
import { NavigationLink } from '@/typings';
import { useAuth } from '@/contexts/AuthContext';

import { Modal } from '../modals/Modal';
import { ModalScene } from '@/enums';
import { COMMON_PAGE_PADDING } from '@/constants';

export default function Navbar() {
    const [isLargerThanLargeScreen] = useMediaQuery('(min-width: 1150px)');
    const router = useRouter();
    const selectedRoute = usePathname().slice(1);
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

    const renderNavigationLinks = () => {
        return getNavigationLinks(!!currentUser).map((navigationLink) => {
            if (navigationLink.text === 'Profile' || navigationLink.text === 'Login') {
                return <Button borderColor="black" fontSize="sm" fontWeight="medium" backgroundColor="transparent" textColor="blue" onClick={() => handleButtonClick(navigationLink)} key={navigationLink.id} rounded="full" variant="outline" _active={{ backgroundColor: "transparentOnClick" }}>{navigationLink.text}</Button>
            }

            if (navigationLink.text === 'Sign out' || navigationLink.text === 'Register') {
                return <Button borderColor="black" fontSize="sm" fontWeight="medium" backgroundColor="blue" textColor="white" onClick={() => handleButtonClick(navigationLink)} key={navigationLink.id} rounded="full" variant="outline" _active={{ backgroundColor: "blueOnClick" }}>{navigationLink.text}</Button>
            }
            const isSelected = selectedRoute.startsWith(navigationLink.path);

            return <Link
                _hover={isSelected ? {} : {
                    textDecoration: 'underline',
                }}
                color="black"
                fontWeight={isSelected ? 'bold' : 'medium'}
                fontSize="sm"
                textDecoration={isSelected ? 'underline' : 'none'}
                href={`/${navigationLink.path}`}
                key={navigationLink.id}
            >
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