"use client"

import Select, { GroupBase, OptionProps, SingleValueProps, StylesConfig, components } from "react-select";
import { Box } from "@/components/chakra";
import { useState } from "react";
import { QuestionType } from "@/enums";

interface Props {
    onChangeValue: (newQuestionType: QuestionType) => void;
    value: QuestionType;
}

interface SelectOption {
    label: string;
    value: QuestionType;
    imageUrl: string;
}

const SELECT_OPTIONS: SelectOption[] = [
    {
        label: "Multiple Choice",
        value: QuestionType.MULTIPLE_CHOICE,
        imageUrl: "/multipleChoice.png"
    },
    {
        label: "Checkboxes",
        value: QuestionType.CHECKBOXES,
        imageUrl: "/checkbox.png"
    },
    {
        label: "True/False",
        value: QuestionType.TRUE_FALSE,
        imageUrl: "/trueFalse.png"
    },
]

const { SingleValue, Option } = components;

const IconValue = (props: SingleValueProps) => (
    <SingleValue {...props}>
        <img src={(props.data as SelectOption).imageUrl} style={{ height: '30px', width: '30px', marginRight: '10px' }} />
        {(props.data as SelectOption).label}
    </SingleValue>)

const IconOption = (props: OptionProps) => (
    <Option {...props}>
        <img src={(props.data as SelectOption).imageUrl} style={{ height: '30px', width: '30px', marginRight: '10px', display: "inline" }} />
        {(props.data as SelectOption).label}
    </Option>
);

const customStyles: StylesConfig<SelectOption, true, GroupBase<SelectOption>> = {
    option: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: "#000",
        fontSize: "18px",
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: "#000",
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

const mapQuestionTypeToSelectedOption = (questionType: QuestionType) => {
    return SELECT_OPTIONS.find((option) => option.value === questionType) ?? SELECT_OPTIONS[0];
}

export function CustomSelect({ onChangeValue, value }: Props) {

    const [selectedOption, setSelectedOption] = useState(mapQuestionTypeToSelectedOption(value));

    const handleInputChange = (selectedOption: SelectOption) => {
        onChangeValue(selectedOption.value)
    }

    return (
        <Box position="relative" backgroundColor="white">
            <Select options={SELECT_OPTIONS} name="quiz-variant" components={{ SingleValue: IconValue as any, Option: IconOption as any }} styles={customStyles} isSearchable={false} defaultValue={SELECT_OPTIONS[0]} onChange={(newValue) => handleInputChange(newValue as unknown as SelectOption)} />
        </Box>
    )
}