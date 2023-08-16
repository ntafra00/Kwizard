import { Center, Input } from "@chakra-ui/react";
import { useState } from "react";

export function PinInput() {

    const [value, setValue] = useState<number | undefined>();

    const handleNumberInput = (value: string) => {
        setValue(+value);
    }

    return (
        <Input w="48px" h="48px" p="0 16px" borderRadius="6px" border="1px solid #E2E8F0" fontSize="md" fontWeight="regular" color="#A0AEC0" type="number" value={value} onChange={handleNumberInput} placeholder="○" />
    )
}