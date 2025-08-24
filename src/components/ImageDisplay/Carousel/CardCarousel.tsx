import Carousel from 'react-bootstrap/Carousel';
import ImageProjectDisplay from '../ImageComponent/ImageComponent';
import styled from 'styled-components';

export default function CardCarousel() {
    return (
        <>
            <StyledCarousel>
                <Carousel pause={'hover'} interval={null}>
                    <Carousel.Item>
                        <ImageProjectDisplay imageSrc={'/cinemateca.jpg'} imageAlt={'Site lindoooo'} isLink={true} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImageProjectDisplay imageSrc={'/cinemateca.jpg'} imageAlt={'Site lindoooo'} isLink={true} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ImageProjectDisplay imageSrc={'/cinemateca.jpg'} imageAlt={'Site lindoooo'} isLink={true} />
                    </Carousel.Item>
                </Carousel>
            </StyledCarousel>
        </>
    );
}

export const StyledCarousel = styled.div`
    .carousel-indicators{
        margin-bottom: 0 !important
    }

`
