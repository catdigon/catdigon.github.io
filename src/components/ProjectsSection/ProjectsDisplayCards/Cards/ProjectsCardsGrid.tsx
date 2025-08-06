import styled from "styled-components";
import ProjectsCards from "./ProjectsCards";

export default function ProjectsGridCards() {
    return(
        <>
        <Overide>
        <ProjectsCards />
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

    .card-img-top{
        border-radius: var(--bs-card-border-radius);
    }
`
