import { Card } from "react-bootstrap";
import { StyledList } from "./Lists.styled";

interface Props{
    title?: string;
    list : {title: string; text: string}[];
}

export default function CardListComplete({title , list}: Props){
    return(
        <>
        <Card.Header style={{paddingTop: 4}}><strong>{title}</strong></Card.Header>
        <StyledList>
            {list.map((point, index) =>(
                <li key={index}>
                    <Card.Subtitle>{point.title}</Card.Subtitle>
                    <div>{point.text}</div>
                </li>
            ))}
        </StyledList>
        </>
    )
}