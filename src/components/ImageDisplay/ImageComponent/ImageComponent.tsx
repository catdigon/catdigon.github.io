import { Card, Figure } from 'react-bootstrap';
import { StyledImageArea } from './ImageComponent.styled';
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
                    <Card.Img
                        variant="top"
                        src={imageSrc}
                        alt={imageAlt} />

                    <GoLinkExternal style={{
                        position: 'absolute',
                        right: "2.5%",
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
            </StyledImageArea>
        </>
    )
}