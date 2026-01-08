import styled from "styled-components";
import OtherProjectsCard from "./OtherProjectsCard";
import { StyledSection } from "./OtherProjectsSection.styled";

export default function OtherProjectsSection() {

    return (
        <>
            <StyledSection>
                    <Overide>
                        <OtherProjectsCard />
                    </Overide>
            </StyledSection>
        </>
    )
}

const Overide = styled.div`
    .card{
    padding: 2.5rem 0;
    }

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }
`