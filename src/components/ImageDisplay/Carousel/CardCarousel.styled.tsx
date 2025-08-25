import styled from "styled-components";

export const StyledCarousel = styled.div`
    .carousel-indicators{
        margin-bottom: 48px !important
        }

    img{
        width: 88%;
    }

    .carousel-control-prev, 
    .carousel-control-next{
        width: 5%;
        opacity: .4 !important;
    }
`

export const StyledImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .img-caption{
        justify-self: anchor-center;
        padding-top: 4px;
    }

    padding-bottom: 20px;
`