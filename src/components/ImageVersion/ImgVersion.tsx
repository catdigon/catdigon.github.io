interface Props{
  srcDesktop: string;
  srcMobile? : string;
  alt?: string;
  className?: string;
}

export default function ImgDisplay({srcDesktop, srcMobile, alt, className}: Props) {
    const srcSet = srcMobile
    ? `${srcMobile} 768w, ${srcDesktop} 1920w`
    : `${srcDesktop} 1920w`;

  return <img
    src={srcDesktop}
      srcSet={srcSet} 
    sizes="(max-width: 768px) 100vw, 1920px"
    alt={alt}
    className={className}
    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
  />;
}