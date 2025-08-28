import { Card, Figure } from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';
import { StyledImageContainer } from './CardCarousel.styled';

interface Props {
    imageSrc: string;
    imageAlt: string;
    isLink: boolean;
}

export default function CarouselImage({ imageSrc, imageAlt, isLink }: Props) {

    return (
        <>
            <StyledImageContainer>
                {isLink ? (<a href={imageSrc} target='_blank' rel='noopener'>
                    <Card.Img
                        className='imageLink'
                        variant="top"
                        src={imageSrc}
                        alt={imageAlt} />

                    <GoLinkExternal style={{
                        position: 'absolute',
                        right: "8%",
                        top: "4%",
                    }} />
                    <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                </a>)
                    :
                    <>
                        <Card.Img
                            variant="top"
                            src={imageSrc}
                            alt={imageAlt} />

                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageContainer>
        </>
    )
}