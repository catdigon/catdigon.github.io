import { Card, Figure } from 'react-bootstrap';
import { StyledCardImg, StyledImageArea } from './ImageComponent.styled';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
    imageSrc: string;
    imageAlt: string;
    isLink: boolean;
}

export default function ImageProjectDisplay({ imageSrc, imageAlt, isLink }: Props) {

    return (
        <>
            <StyledImageArea>
                {isLink ? (<a href={imageSrc} target='_blank' rel='noopener'>
                    <StyledCardImg>
                        <Card.Img
                            variant="top"
                            src={imageSrc}
                            alt={imageAlt} />


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
                                src={imageSrc}
                                alt={imageAlt} />
                        </StyledCardImg>
                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageArea>
        </>
    )
}