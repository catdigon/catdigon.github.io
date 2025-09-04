import { Card, Figure } from 'react-bootstrap';
import { StyledImageArea } from './ImageComponent.styled';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
    imageSrc: string;
    imageAlt: string;
    isLink: boolean;
}

export default function ImageDisplaySimple({ imageSrc, imageAlt, isLink }: Props) {

    return (
        <>
            <StyledImageArea>
                {isLink ? (<a href={imageSrc} target='_blank' rel='noopener'>
                        <Card.Img
                            className='imageLink'
                            variant="top"
                            src={imageSrc}
                            alt= "" />
                        
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
                                src={imageSrc}
                                alt= ""/>
                        <Figure.Caption className='img-caption'>{imageAlt}</Figure.Caption>
                    </>
                }
            </StyledImageArea>
        </>
    )
}