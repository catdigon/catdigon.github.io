import styled from "styled-components"

export default function HeaderTextOtherProject() {

    return (
        <>
            <StyledArea>
                <h2>
                    Other Creative Projects
                </h2>
                <p>This page brings together a selection of projects I've contributed to ouside the UX field.
                    These works reflect my ongoing interest in narrative, colaboration, and creative technology.
                </p>
            </StyledArea>
        </>
    )
}

const StyledArea = styled.div`
        width: 60%;
        display: flex;
        flex-direction: column;
        margin-inline-start: 15%;
`