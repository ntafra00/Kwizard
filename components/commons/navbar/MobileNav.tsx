"use client"

import {
    Box,
    Stack,
    Flex,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import Image from 'next/image';
import logo from '@/public/logo.png'


interface Props {
    navigationLinks: JSX.Element[];
}

export default function MobileNavbar({ navigationLinks }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    onClick={isOpen ? onClose : onOpen}
                    bgColor='transparent'
                    color='white'
                    _hover={{}}
                />
                <Box><Image src={logo} alt='Qwizard logo' width={150} height={150}></Image></Box>

            </Flex >
            {isOpen && (
                <Box pb={4}>
                    <Stack as={'nav'} spacing={4}>
                        {navigationLinks}
                    </Stack>
                </Box>
            )}
        </>
    );
}