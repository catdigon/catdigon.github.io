import styled from "styled-components";
import OtherProjectsCard from "./OtherProjectsCard";
import { StyledCardContainer, StyledSection } from "./OtherProjectsSection.styled";

export default function OtherProjectsSection() {

    return (
        <>
            <StyledSection>
                <StyledCardContainer>
                    <Overide>
                        <OtherProjectsCard />
                    </Overide>
                </StyledCardContainer>
            </StyledSection>
        </>
    )
}

const Overide = styled.div`
    .card{
    --bs-card-bg: transparent;
    --bs-card-border-color: transparent;
    padding: 2.5rem 0;
    }

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }
`