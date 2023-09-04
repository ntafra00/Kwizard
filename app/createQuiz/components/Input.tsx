import { Input as CustomInput } from "@/components/chakra"

interface Props {
    placeholder?: string;
    backgroundColor?: string;
    type?: string;
    isDisabled?: boolean
    onChange?: (value: string) => void;
}

export function Input({ placeholder = "Placeholder", backgroundColor = "transparent", type = "text", isDisabled = false, onChange }: Props) {
    return (
        <CustomInput w="100%" borderRadius="6px" border="1px solid #E2E8F0" placeholder={placeholder} fontSize="18px" fontWeight="normal" color="black" background={backgroundColor} h="48px" type={type} isDisabled={isDisabled} onChange={(event) => onChange?.(event.target.value)} _placeholder={{ color: "#A0AEC0" }} />
    )
}