import EndGradientArea from "./EndGradientArea";
import { MiddleGradientArea } from "./MiddleGradientArea";
import StartGradientArea from "./StartGradientArea";


interface Props {
    startChildren?: React.ReactNode;
    children: React.ReactNode;
    id?: string;
}


export default function GradientArea( { startChildren, children, id }: Props ) {

    return(

        <>
        <div id={id} />
            <StartGradientArea>
                {startChildren}
            </StartGradientArea>
            <MiddleGradientArea>
                {children}
            </MiddleGradientArea>
            <EndGradientArea />
        </>

    )
}