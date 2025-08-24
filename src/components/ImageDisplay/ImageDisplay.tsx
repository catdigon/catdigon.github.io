import CardCarousel from "./Carousel/CardCarousel";
import ImageProjectDisplay from "./ImageComponent/ImageComponent";

interface Props{
    showMultipleImges: boolean;
}

export default function ImageDisplay({ showMultipleImges = false}: Props){
    return(
        <>
        {showMultipleImges ? (<ImageProjectDisplay imageSrc={""} imageAlt={""} isLink={false} />
        ) :
        <CardCarousel />
        }
        
        </>
    )
}