import Image from 'react-bootstrap/Image';

export default function MeImg() {
  return <Image 
      src="/about/me.webp"
      srcSet={`
      /about/me-mobile.webp 767w,
      /about/me.webp 1920w
      `}
      sizes="(max-width: 767px) 100vw, 1920px"  
      alt="Photo of me"
      style={{ width: '80%', height: 'auto' }}
/>;
}