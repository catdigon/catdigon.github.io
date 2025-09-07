import { Card, Figure } from 'react-bootstrap';
import { StyledImageArea } from './ImageComponent.styled';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
    imageSrc: string;
    imageMobile: string;
    imageAlt: string;
    isLink: boolean;
    imageLink?: string;
}

export default function ImageDisplaySimple({ imageSrc, imageMobile, imageAlt, isLink, imageLink }: Props) {

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
                    <Card.Img
                        className='imageLink'
                        variant="top"
                        {...imgProps} />

                    <GoLinkExternal style={{
                        position: 'absolute',
                        right: "3%",
                        top: "4%",
                    }} />

                    <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                </a>)
                    :
                    <>
                        <Card.Img
                            variant="top"
                            {...imgProps}
                        />
                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageArea>
        </>
    )
}