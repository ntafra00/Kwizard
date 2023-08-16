import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    NumberInput as ChakraNumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

import { useState } from 'react';

interface Props {
    maximumValue: number;
    minimumValue: number;
    step: number;
    defaultValue?: number;
    format?: (value: string) => string;
    parse?: (value: string) => string;
}

export function NumberInput({ format = (value) => value, parse = (value) => value, defaultValue, maximumValue, minimumValue, step }: Props) {

    const [value, setValue] = useState(`${defaultValue ?? minimumValue}`)


    return (
        <ChakraNumberInput
            onChange={(valueString) => setValue(parse(valueString))}
            value={format(value)}
            max={maximumValue}
            min={minimumValue}
            step={step}
            w="100%"
            borderRadius="6px"
            border="1px solid #E2E8F0"
        >
            <NumberInputField disabled fontSize="18px" />
            <NumberInputStepper>
                <NumberIncrementStepper
                    bg="transparent"
                    border="1px solid #E2E8F0"
                    children={<ChevronUpIcon />}
                />
                <NumberDecrementStepper
                    bg="transparent"
                    border="1px solid #E2E8F0"
                    children={<ChevronDownIcon />}
                />
            </NumberInputStepper>
        </ChakraNumberInput>
    )
}