import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    id?: string;
    color?: string;
    zIndex?: number;
    className?: string;
    marginTop?: string;
    boxShadow?: boolean;
}

export default function SectionArea({ children, id, color, zIndex = 1, className, marginTop, boxShadow = true }: Props) {

    return (
        <>
            <Section id={id}
                $bg={color}
                marginTop={marginTop}
                $boxShadow={boxShadow}
                style={{zIndex}}
                className={`px-4 ${className || ''}`}>
                    {children}
            </Section>
        </>
    )
}

const Section = styled.section <{ $bg?: string; marginTop?: string; $boxShadow: boolean}>`
    width: 100%;
    background: ${({ $bg }) => $bg || "white"};
    box-shadow: ${({ $boxShadow }) => ($boxShadow ? "0 0 15px rgba(0,0,0,0.25)" : "none")};
    border-radius: 16px;
    margin-top: ${({ marginTop }) => marginTop || "0rem"};
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;
