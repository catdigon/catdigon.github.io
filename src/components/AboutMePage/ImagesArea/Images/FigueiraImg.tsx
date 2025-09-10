import Image from 'react-bootstrap/Image';

export default function FigueiraImg() {
  return <Image 
    src="/about/figueira-beach.webp"
    srcSet={`
      /about/figueira-beach.webp 768w,
      /about/figueira-beach.webp 1920w
      `}
      sizes="(max-width: 768px) 100vw, 1920px"
    alt="Photo of Figueira"
    style={{ width: '85%', height: 'auto' }}/>;
}