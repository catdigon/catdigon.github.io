import Image from 'react-bootstrap/Image';

export default function MeImg() {
  return <Image
    src="/about/me.webp"
    srcSet={`
      /about/me-mobile.webp 768w,
      /about/me.webp 1920w
      `}
    sizes="(max-width: 768px) 100vw, 1920px"
    style={{ objectFit: 'cover' }}
  />;
}