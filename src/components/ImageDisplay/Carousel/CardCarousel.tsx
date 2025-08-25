import Carousel from 'react-bootstrap/Carousel';
import { StyledCarousel } from './CardCarousel.styled';
import CarouselImage from './CarouselImage';

interface Props {
    images: string[];
    imageAlt: string;
    isLink: boolean;
}

export default function CardCarousel({ images, imageAlt, isLink }: Props) {
    return (
        <>
            <StyledCarousel>
                <Carousel pause={'hover'} interval={null}>

                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <CarouselImage imageSrc={image} imageAlt={imageAlt} isLink={isLink} />
                        </Carousel.Item>
                    ))}



                </Carousel>
            </StyledCarousel>
        </>
    );
}
