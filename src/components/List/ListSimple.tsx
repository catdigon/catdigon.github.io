import { Card } from "react-bootstrap";
import { StyledList } from "./Lists.styled";


interface Props{
    title?: string;
    list : string[];
}

export default function CardListSimple({title, list}: Props){
    return(
        <>
        <Card.Header style={{paddingTop: 4}}><strong>{title}</strong></Card.Header>
        <StyledList>
            {list.map((point, index) =>(
                <li key={index}>{point}</li>
            ))}
        </StyledList>
        </>
    )
}