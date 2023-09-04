"use client"

import Select, { GroupBase, OptionProps, SingleValueProps, StylesConfig, components } from "react-select";
import { Box } from "@/components/chakra";
import { useState } from "react";

interface SelectOption {
    label: string;
    value: boolean;
    imageUrl: string;
}

const SELECT_OPTIONS: SelectOption[] = [
    {
        label: "True",
        value: true,
        imageUrl: "trueFalse.png"
    },
    {
        label: "False",
        value: false,
        imageUrl: "trueFalse.png"
    }
]

const { SingleValue, Option } = components;

const IconValue = (props: SingleValueProps) => (
    <SingleValue {...props}>
        {(props.data as SelectOption).label}
    </SingleValue>)

const IconOption = (props: OptionProps) => (
    <Option {...props}>
        {(props.data as SelectOption).label}
    </Option>
);

const customStyles: StylesConfig<SelectOption, true, GroupBase<SelectOption>> = {
    option: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: "#A0AEC0",
        fontSize: "18px",
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: "#A0AEC0",
        fontSize: "18px",
    }),
    control: (provided) => ({
        ...provided,
        borderRadius: "6px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#EFEFEF",
        minHeight: "48px"
    })
}

export function TrueFalse() {

    const [selectedOption, setSelectedOption] = useState(SELECT_OPTIONS[0].value);

    const handleInputChange = (selectedOption: SelectOption) => {
        setSelectedOption(selectedOption.value)
    }

    return (
        <Box backgroundColor="white" w="100%">
            <Select options={SELECT_OPTIONS} name="quiz-variant" components={{ SingleValue: IconValue, Option: IconOption }} styles={customStyles} isSearchable={false} defaultValue={SELECT_OPTIONS[0]} onChange={(newValue) => handleInputChange(newValue as SelectOption)} isMulti={false} />
        </Box>
    )
}