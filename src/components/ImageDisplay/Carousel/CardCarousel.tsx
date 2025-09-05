import Carousel from 'react-bootstrap/Carousel';
import { StyledCarousel } from './CardCarousel.styled';
import CarouselImage from './CarouselImage';

interface Props {
    images: { imageSrc: string, 
              imageMobile: string, 
              imageAlt: string, 
              imageLink: string,
              isLink: boolean} [];
}

export default function CardCarousel({ images }: Props) {
    return (
        <>
            <StyledCarousel>
                <Carousel pause={'hover'} interval={null}>

                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <CarouselImage 
                                imageSrc={image.imageSrc}
                                imageMobile={image.imageMobile}
                                imageAlt={image.imageAlt}
                                isLink={image.isLink} 
                                imageLink={image.imageLink} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </StyledCarousel>
        </>
    );
}
