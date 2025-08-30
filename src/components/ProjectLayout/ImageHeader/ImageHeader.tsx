import Image from 'react-bootstrap/Image';
import { StyledImageCover } from './ImageHeader.styled';

interface Props{
    image: string;
    alt: string;
}

export default function ImageHeader({image, alt}: Props){

    return(
        <>
        <StyledImageCover>
                <Image src={image} alt={alt} rounded/>
            </StyledImageCover>
        </>
    )
}

