import styled from "styled-components";

export const StyledImageArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    a{
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    a:hover{
        svg{
            stroke-width: 1px;
        }
    }

    .imageLink:hover{
        box-shadow: 0 0 0 0px rgba(0, 128, 163, 0.5),
            0 0 10px rgba(0, 128, 163, 0.3),
            0 0 30px rgba(0, 128, 163, 0.2);
    }

    .img-caption{
        justify-self: anchor-center;
        padding-top: 4px;
    }

    img{
        border-radius: 6px;
    }
`

export const StyledCardImg = styled.div`
    max-height: 26rem;
    overflow: auto;
    border-radius: 6px;
        
    @media (max-width: 992px) {
        height: 18rem;
    }
`
