"use client"

import {
    Box,
    Flex,
    HStack,
} from '@chakra-ui/react';

import Image from 'next/image';
import logo from '@/public/logo.png'

interface Props {
    navigationLinks: JSX.Element[];
}

export default function DesktopNavbar({ navigationLinks }: Props) {
    return (
        <Flex h={32} alignItems={'center'} justifyContent={'space-between'} pl={20} pr={20}>
            <Box width={'20%'}>
                <Image src={logo} alt='Kwizard logo' width={200} height={200} />
            </Box>
            <Flex alignItems={'center'} justifyContent={'flex-end'} >
                <HStack
                    as={'nav'}
                    spacing={4}
                >
                    {navigationLinks}
                </HStack>
            </Flex>
        </Flex>
    );
}