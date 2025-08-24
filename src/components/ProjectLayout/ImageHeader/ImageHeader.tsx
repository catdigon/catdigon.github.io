import Image from 'react-bootstrap/Image';
import { StyledImageCover } from './ImageHeader.styled';

export default function ImageHeader(){

    return(
        <>
        <StyledImageCover>
                <Image src="/projects/cinemateca/cinemateca-broswer.png" rounded/>
            </StyledImageCover>
        </>
    )
}

