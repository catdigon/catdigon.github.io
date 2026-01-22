interface Props {
    imageMobile?: string;
    imageDesktop: string;
    alt?: string;
    className?: string;
}

export default function ImageDisplay({ imageMobile, imageDesktop, alt = "", className }: Props) {

    const imgVersions = [
        imageMobile ? `${imageMobile} 768w` : null,
        imageDesktop ? `${imageDesktop} 1920w` : null,
    ].filter(Boolean).join(', ');

    const sizes = "(max-width: 768px) 100vw, 1920px";

    return (
        <img
            src={imageDesktop}
            srcSet={imgVersions}
            sizes={sizes}
            alt={alt}
            className={className}
            />
    )
}

