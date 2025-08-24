import { Card, Figure } from 'react-bootstrap';
import { GoLinkExternal } from 'react-icons/go';
import { StyledImageArea } from '../ImageDisplay/ImageComponent/ImageComponent.styled';

interface Props {
    imageSrc: string;
    imageAlt: string;
    isLink: boolean;
}

export default function ImageProjectDisplay({ imageSrc, imageAlt, isLink = true }: Props) {

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
                        marginLeft: "-2rem",
                        marginTop: "1rem"
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