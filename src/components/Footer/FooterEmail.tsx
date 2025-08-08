import { Button } from "react-bootstrap";
import { BsEnvelopeAt, BsEnvelopeAtFill } from "react-icons/bs";
import { StyledEmailLink } from "./FooterEmail.styled";
import { useState } from "react";

export default function FooterEmail() {

    const [hovered, setHovered] = useState(false);

    return (
        <>
            <StyledEmailLink>
                <Button
                    variant="link"
                    href="mailto:catdigon.all@gmail.com"
                    aria-label="Send email"
                    className="d-inline-flex align-items-center gap-2"
                    onMouseEnter={ () => setHovered(true) }
                    onMouseLeave={ () => setHovered(false) }
                >
                    {hovered ? <BsEnvelopeAtFill /> : <BsEnvelopeAt /> }
                    
                    catdigon.all@gmail.com
                </Button>
            </StyledEmailLink>
        </>
    )
}