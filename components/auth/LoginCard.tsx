import {
    Flex,
    Box,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from '@chakra-ui/react';

import LoginForm from './LoginForm';
import { useAuth } from '@/contexts/AuthContext';

export function LoginCard() {

    const { isModalOpen, toggleModal } = useAuth();

    return (
        <Modal blockScrollOnMount={false} isOpen={isModalOpen} onClose={toggleModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        bg={'gray.50'}
                        minH={'70vh'}
                    >
                        <Stack spacing={8} mx={'auto'} w={{ base: 'sm', md: 'md', lg: 'lg' }} py={12} px={6}>
                            <Stack align={'center'}>
                                <Heading fontSize={'2xl'}>Log in to your account</Heading>
                                <Text fontSize={'lg'} color={'gray.600'}>
                                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                                </Text>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <LoginForm />
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}