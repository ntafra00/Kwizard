"use client"

import {
    Box,
    Stack,
    Flex,
    Image,
    useDisclosure,
    Button,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface Props {
    navigationLinks: JSX.Element[];
}

export default function MobileNavbar({ navigationLinks }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex alignItems="flex-end" justifyContent="space-between" pb="10px">
                <Link href="/">
                    <Image src="logo.png" alt='Qwizard logo' width="40%" />
                </Link>
                <Button
                    aria-label='Open Menu'
                    onClick={isOpen ? onClose : onOpen}
                    bgColor='transparent'
                    color='black'
                    pb="1"
                    alignItems="flex-end"
                    _hover={{}}
                >
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </Button>
            </Flex >
            {isOpen && (
                <Box pt="10px" pb="20px">
                    <Stack as={'nav'} spacing={4} justify="center">
                        {navigationLinks}
                    </Stack>
                </Box>
            )}
        </>
    );
}