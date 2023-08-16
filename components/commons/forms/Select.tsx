import { useState } from "react";
import { Select as ChakraSelect } from "chakra-react-select";

interface Props {
    imageUrl?: string
}

interface SelectOption {
    label: string;
    value: string;
}

const SELECT_OPTIONS: SelectOption[] = [
    {
        label: "Multiple Choice",
        value: "multiple",
    },
    {
        label: "Checkboxes",
        value: "checkbox",
    },
    {
        label: "True/False",
        value: "boolean",
    },
]

export function Select({ imageUrl }: Props) {
    return (
        <ChakraSelect options={SELECT_OPTIONS} useBasicStyles/>
    )
}