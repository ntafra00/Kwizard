import { Button as ChakraButton } from "@chakra-ui/react";

interface Props {
    text: string;
    textColor: string;
    backgroundColor?: string;
    variant?: string;
    borderRadius?: string;
    type?: "submit" | "button";
    isLoading?: boolean;
    fullWidth?: boolean;
    fontSize?: string | object;
    buttonAction: () => void;
}

export function Button({ text, textColor, backgroundColor, variant = "outline", borderRadius = "full", type = "button", fontSize = "sm", isLoading = false, fullWidth = false, buttonAction }: Props) {

    return (
        <ChakraButton
            rounded={borderRadius}
            variant={variant}
            color={textColor}
            background={backgroundColor ?? "transparent"}
            // borderColor={backgroundColor ?? "black"}
            borderColor="black"
            onClick={buttonAction}
            fontSize={fontSize}
            fontWeight="medium"
            type={type}
            isLoading={isLoading}
            w={fullWidth ? "full" : "inherit"}
        >
            {text}
        </ChakraButton>
    )
}