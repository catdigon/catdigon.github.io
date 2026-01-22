import { StyledImageCover } from "./ImageHero.styled";

interface Props{
    image: string;
    imageMobile: string;
    alt: string;
}

export default function ImageHero({image, imageMobile, alt}: Props){

    const imgVersions = [
        imageMobile ? `${imageMobile} 768w` : null,
        image ? `${image} 1920w` : null,
        ].filter(Boolean);

    const imgProps = {
    src: image,
    srcSet: imgVersions.join(', '),
    sizes: `(max-width: 768px) 100vw, 1920px`,
    alt,
  };

    return(
        <>
        <StyledImageCover>
                <img {...imgProps}/>
            </StyledImageCover>
        </>
    )
}

