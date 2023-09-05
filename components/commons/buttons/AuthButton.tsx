import { useState } from "react";

interface Props {
    text: string;
}

export function AuthButton({ text }: Props) {
    const [isClicked, setIsClicked] = useState(false);

    const toggleMouseState = () => {
        setIsClicked((prevState) => !prevState);
    }

    const style = {
        padding: "0 64px",
        color: "white",
        backgroundColor: isClicked ? "#42458E" : "#2E3182",
        borderRadius: "50px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "600",
        fontFamily: "Poppins",
        textWrap: "nowrap",
        type: "submit",
        height: "48px"
    }
    return (
        <button style={style} onMouseDown={toggleMouseState} onMouseUp={toggleMouseState}>
            {text}
        </button>
    )
}