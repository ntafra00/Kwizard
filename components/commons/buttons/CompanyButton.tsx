import { Button, Flex, Text } from '@chakra-ui/react';

interface Props {
    icon: JSX.Element;
    text: string
}

export function CompanyButton({ icon, text }: Props) {
    return (
        <Button
            variant="outline"
            borderRadius="10px"
            borderColor="black"
            py="20px"
            px="55px"
            leftIcon={icon}
        >
            <Text color="black" fontSize="md" fontWeight="medium">{text}</Text>
        </Button>
    );
}