import { BsFacebook } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Icon } from "@/components/chakra";

interface Props {
    type: string,
    color: string
}

enum FacebookIconType {
    OUTLINE = "outline",
    LETTER = "letter",
}

export function FacebookIcon({ type, color }: Props) {
    return (
        <Icon
            as={type === FacebookIconType.OUTLINE ? BsFacebook : FaFacebookF}
            boxSize={{ base: "6", md: "8", lg: "10" }}
            color={color}
        />
    )
}