import styled from "styled-components"
import OtherProjectsCard from "./OtherProjectsCard"

export default function OtherProjectsGridCards() {
    return(
        <>
        <Overide>
        <OtherProjectsCard />
        </Overide>
        </>
    )
}

const Overide = styled.div`
    .card{
        --bs-card-bg: transparent;
        --bs-card-border-color: transparent;
        padding: 2.5rem 0;
    
    }

    .card-body{
        padding: 8px 0;
    }

    .badge{
        margin-bottom: 10px;
    }

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }

`