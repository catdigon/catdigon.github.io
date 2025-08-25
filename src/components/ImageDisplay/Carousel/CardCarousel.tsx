import Carousel from 'react-bootstrap/Carousel';
import { StyledCarousel } from './CardCarousel.styled';
import CarouselImage from './CarouselImage';

interface Props{
    imageSrc: string;
    imageAlt: string;
    isLink: boolean;
}

export default function CardCarousel({imageSrc, imageAlt, isLink}: Props) {
    return (
        <>
            <StyledCarousel>
                <Carousel pause={'hover'} interval={null}>
                    <Carousel.Item>
                        <CarouselImage imageSrc={imageSrc} imageAlt={imageAlt} isLink={isLink} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage imageSrc={imageSrc} imageAlt={imageAlt} isLink={isLink} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselImage imageSrc={imageSrc} imageAlt={imageAlt} isLink={isLink} />
                    </Carousel.Item>
                </Carousel>
            </StyledCarousel>
        </>
    );
}
