import styled from "styled-components";

export const StyledContainer = styled.div`
    .mb-3 {
    margin-bottom: 0 !important;
}

    .btn{
        --bs-btn-padding-x: 0.1rem;
        --bs-btn-padding-y: 0.1rem;
        --bs-btn-font-size: 2.15rem;
    }

    .btn:hover{
        color: #0080A3;
    } 

    ul{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0rem;
    }

    @media (max-width: 768px){
        ul{
            gap: 0.3rem;
        }
    }
`