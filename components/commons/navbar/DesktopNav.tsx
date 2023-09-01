import {
    Flex,
    HStack,
    Spacer,
} from "@/components/chakra";
import Image from 'next/image';
import logo from '@/public/logo.png'
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

interface Props {
    navigationLinks: JSX.Element[];
}

export default function DesktopNavbar({ navigationLinks }: Props) {
    return (
        <Flex alignItems="flex-end" justifyContent="space-between" key={uuid()}>
            <Link href="/">
                <Image src={logo} alt='Kwizard logo' />
            </Link>
            <Spacer />
            <HStack
                as="nav"
                spacing="28px"
                pb="20px"
            >
                {navigationLinks}
            </HStack>
        </Flex >
    );
}