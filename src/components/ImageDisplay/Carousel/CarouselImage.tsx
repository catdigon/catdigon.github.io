import { Card, Figure } from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';
import { StyledImageContainer } from './CardCarousel.styled';

interface Props {
    imageSrc: string;
    imageMobile: string;
    imageAlt: string;
    isLink: boolean;
    imageLink?: string;
}

export default function CarouselImage({ imageSrc, imageMobile, imageAlt, isLink, imageLink }: Props) {

    const imgVersions = [
        imageMobile ? `${imageMobile} 768w` : null,
        imageSrc ? `${imageSrc} 1920w` : null,
    ].filter(Boolean);

    const imgProps = {
        src: imageSrc,
        srcSet: imgVersions.join(', '),
        sizes: `(max-width: 768px) 100vw, 1920px`,
        imageAlt,
    };

    return (
        <>
            <StyledImageContainer>
                {isLink ? (<a style={{paddingTop: "6px"}}href={imageLink} target='_blank' rel='noopener'>
                    <Card.Img
                        className='imageLink'
                        variant="top"
                        {...imgProps}/>

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
                            {...imgProps}/>

                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageContainer>
        </>
    )
}