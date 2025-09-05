import styled from "styled-components";

export const StyledCarousel = styled.div`
    .carousel-indicators{
        margin-bottom: 48px !important;
        }

    img{
        width: 88%;
        border-radius: 6px;
    }

    .carousel-control-prev, 
    .carousel-control-next{
       min-width: 48px;
       min-height: 48px;
       width: 8%;
       opacity: .6 !important;
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
        text-align: center;
        padding-top: 4px;
    }

    padding-bottom: 20px;
`