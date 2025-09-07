import { Card, Figure } from 'react-bootstrap';
import { StyledCardImg, StyledImageArea } from './ImageComponent.styled';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
    imageSrc: string;
    imageMobile: string;
    imageAlt: string;
    isLink: boolean;
    imageLink?: string;
}

export default function ImageDisplayScroll({ imageSrc, imageMobile, imageAlt, isLink, imageLink }: Props) {

        const imgVersions = [
        imageMobile ? `${imageMobile} 767w` : null,
        imageSrc ? `${imageSrc} 1920w` : null,
    ].filter(Boolean);

    const imgProps = {
        src: imageSrc,
        srcSet: imgVersions.join(', '),
        sizes: `(max-width: 767px) 100vw, 1920px`,
        imageAlt,
    };

    return (
        <>
            <StyledImageArea>
                {isLink ? (<a href={imageLink} target='_blank' rel='noopener'>
                    <StyledCardImg className='imageLink'>
                        <Card.Img
                            variant="top"
                            {...imgProps}/>

                        <GoLinkExternal style={{
                            position: 'absolute',
                            right: "3%",
                            top: "4%",
                        }} />
                    </StyledCardImg>
                    <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                </a>)
                    :
                    <>
                        <StyledCardImg>
                            <Card.Img
                                variant="top"
                                {...imgProps}/>
                        </StyledCardImg>
                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageArea>
        </>
    )
}