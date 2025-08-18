import EndGradientArea from "./EndGradientArea";
import StratGradientArea from "./StartGradientArea";

interface Props {
    children: React.ReactNode;
    id?: string;
}


export default function GradientArea( { children, id }: Props ) {

    return(

        <>
        <div id={id} />
        <StratGradientArea />
            {children}
        <EndGradientArea />
        </>

    )
}