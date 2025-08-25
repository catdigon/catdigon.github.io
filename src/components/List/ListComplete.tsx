import { Card } from "react-bootstrap";
import { StyledList } from "./Lists.styled";


interface Props{
    title?: string;
    list : string[];
}

export default function CardListComplete({title , list}: Props){
    return(
        <>
        <Card.Header style={{paddingTop: 4}}><strong>{title}</strong></Card.Header>
        <StyledList>
            <ul>
            {list.map((point, index) =>(
                <>
                <li key={index}>
                    <Card.Subtitle>{point}</Card.Subtitle>
                    <div>{point}</div>
                </li>
                </>
            ))}
            </ul>
        </StyledList>
        </>
    )
}