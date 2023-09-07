import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    text: string;
    leftIcon: React.JSX.Element;
    buttonAction: () => void;
}

export function CompanyButton({ text, leftIcon, buttonAction }: Props) {
    const [isClicked, setIsClicked] = useState(false);
    const [isSmallerThanSmallScreen] = useMediaQuery('(max-width: 480px)')

    const toggleMouseState = () => {
        setIsClicked((prevState) => !prevState);
    }

    const style = {
        padding: isSmallerThanSmallScreen ? "8px 40px 8px 40px" : "8px 60px 8px 60px",
        color: "#3F3D3D",
        backgroundColor: isClicked ? "#E4E4E4" : "transparent",
        borderRadius: "8px",
        border: `1px solid #3F3D3D`,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        fontSize: isSmallerThanSmallScreen ? "12px" : "16px",
        fontWeight: "400",
        fontFamily: "Poppins",
        textWrap: "nowrap",
    }
    return (
        <button style={style} onClick={buttonAction} onMouseDown={toggleMouseState} onMouseUp={toggleMouseState}>
            {leftIcon}
            {text}
        </button>
    )
}