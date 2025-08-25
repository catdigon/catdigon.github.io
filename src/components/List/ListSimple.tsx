import { StyledList } from "./Lists.styled";


interface Props{
    list : string[];
}

export default function CardListSimple({list}: Props){
    return(
        <>
        <StyledList>
            <ul>
            {list.map((point, index) =>(
                <li key={index}>{point}</li>
            ))}
            </ul>
        </StyledList>
        </>
    )
}