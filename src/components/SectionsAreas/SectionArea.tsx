import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    id?: string;
    color?: string;
    zIndex?: number;
}


export default function SectionArea({ children, id, color, zIndex = 1 }: Props) {

    return (
        <>
            <Section id={id}
                bg={color}
                style={{zIndex}}>
                <BodyContainer >
                    {children}
                </BodyContainer>
            </Section>
        </>

    )
}

const Section = styled.section <{ bg?: string }>`
    position: sticky;
    top: 0;
    width: 100%;
    border-radius: 16px;
    background: ${({ bg }) => bg || "white"};
`;

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 72px;
`;