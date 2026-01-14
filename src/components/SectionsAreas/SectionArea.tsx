import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    id?: string;
    color?: string;
    zIndex?: number;
    className?: string;
}

export default function SectionArea({ children, id, color, zIndex = 1, className }: Props) {

    return (
        <>
            <Section id={id}
                bg={color}
                style={{zIndex}}
                className={className}>
                    {children}
            </Section>
        </>
    )
}

const Section = styled.section <{ bg?: string }>`
    width: 100%;
    background: ${({ bg }) => bg || "white"};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
}
`;
