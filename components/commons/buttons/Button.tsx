import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    text: string;
    textColor: string;
    backgroundColorOnClick: string;
    buttonAction: () => void;
    borderColor?: string;
    visibility?: "visible" | "hidden";
    backgroundColor?: string;
    type?: "submit" | "button";
    leftIcon?: React.JSX.Element;
}

const mapColorToHex = (color: string) => {
    switch (color) {
        case "blue":
            return "#2E3182"
        case "white":
            return "#EFEFEF"
        case "orange":
            return "#EF9D59"
        case "blueOnClick":
            return "#454782"
        case "transparentOnClick":
            return "#ebe7bb"
        case "orangeOnClick":
            return "#f2cfb3"
        case "whiteOnClick":
            return "#f3eeec"
        default:
            return "transparent"
    }
}

export function Button({ text, textColor, backgroundColorOnClick, borderColor = "#000", backgroundColor = "transparent", type = "button", visibility = "visible", leftIcon, buttonAction }: Props) {
    const [isClicked, setIsClicked] = useState(false);
    const [isSmallerThanLargeScreen] = useMediaQuery('(max-width: 1280px)');
    const [isSmallerThanMediumScreen] = useMediaQuery('(max-width: 768px)');

    const toggleMouseState = () => {
        setIsClicked((prevState) => !prevState);
    }

    const calculateFontSize = () => {
        if (isSmallerThanMediumScreen) {
            return "16px";
        }
        if (isSmallerThanLargeScreen) {
            return "20px";
        }
        return "24px";
    }

    const calculatePadding = () => {
        if (isSmallerThanMediumScreen) {
            return "8px 12px 8px 12px";
        }
        if (isSmallerThanLargeScreen) {
            return "12px 24px 12px 24px";
        }
        return "16px 48px 16px 48px";
    }

    const style = {
        padding: calculatePadding(),
        color: mapColorToHex(textColor),
        backgroundColor: mapColorToHex(isClicked ? backgroundColorOnClick : backgroundColor),
        borderRadius: "50px",
        border: `1px solid ${borderColor}`,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        fontSize: calculateFontSize(),
        fontWeight: "500",
        fontFamily: "Poppins",
        visibility: visibility,
    }
    return (
        <button style={style} onClick={buttonAction} onMouseDown={toggleMouseState} onMouseUp={toggleMouseState}>
            {leftIcon}
            {text}
        </button>
    )
}