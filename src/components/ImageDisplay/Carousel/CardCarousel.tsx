import Carousel from 'react-bootstrap/Carousel';
import { StyledCarousel } from './CardCarousel.styled';
import CarouselImage from './CarouselImage';

interface Props {
    images: {imagesrc: string, imageAlt: string, isLink: boolean}[];
}

export default function CardCarousel({ images }: Props) {
    return (
        <>
            <StyledCarousel>
                <Carousel pause={'hover'} interval={null}>

                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <CarouselImage 
                            imageSrc={image.imagesrc} 
                            imageAlt={image.imageAlt} 
                            isLink={image.isLink} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </StyledCarousel>
        </>
    );
}
