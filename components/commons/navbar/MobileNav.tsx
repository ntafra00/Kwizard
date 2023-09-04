"use client"

import {
    Box,
    Stack,
    Flex,
    useDisclosure,
    Button,
    useMediaQuery,
} from "@/components/chakra";

import { CloseIcon, HamburgerIcon } from '@/components/chakra-icons';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png'

interface Props {
    navigationLinks: JSX.Element[];
}

export default function MobileNavbar({ navigationLinks }: Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" pb="10px">
                <Link href="/">
                    <Image src={logo} alt='Qwizard logo' width={0} height={0} style={{ width: isSmallerThanMediumScreen ? '60%' : '100%' }} />
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