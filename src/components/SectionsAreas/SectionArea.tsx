import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    id?: string;
    color?: string;
    zIndex?: number;
    heightPercent?: number;
}


export default function SectionArea({ children, id, color, zIndex = 1, heightPercent = 100, }: Props) {

    return (
        <>
            <Section id={id}
                style={{
                    background: color,
                    zIndex,
                    height: `${heightPercent}vh`
                }}>
                <BodyContainer>
                    {children}
                </BodyContainer>
            </Section>
        </>

    )
}

const Section = styled.section`
    position: sticky;
    top: 0;
    width: 100%;
    padding-top: 72px;
`;

export const BodyContainer = styled.div`
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 72px;
            `;