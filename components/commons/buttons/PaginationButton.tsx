import { Button } from "@/components/chakra";

interface Props {
    text: string,
    icon: JSX.Element,
    iconPosition: "right" | "left",
    isButtonVisible: boolean,
    buttonAction: () => void,
}

export function PaginationButton({ text, icon, iconPosition, isButtonVisible, buttonAction }: Props) {
    return (
        <Button background="blue" textColor="white" fontSize="md" leftIcon={iconPosition === "left" ? icon : undefined} rightIcon={iconPosition === "right" ? icon : undefined} fontWeight="medium" onClick={buttonAction} visibility={isButtonVisible ? "visible" : "hidden"}>
            {text}
        </Button>
    )
}