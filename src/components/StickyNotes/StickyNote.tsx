import { Card } from "react-bootstrap";
import { StyledStickyNote } from "./StickyNote.styled";

export default function StickyNote(){

    return(
        <>
        <StyledStickyNote>
        <Card border="info">
        <Card.Body>
          <Card.Title>Note</Card.Title>
          <Card.Text>
            As cinephile, I saw an opportunity to bring clarity and a sense of narrative to the way this institution is represented online.
          </Card.Text>
        </Card.Body>
      </Card>
      </StyledStickyNote>
      </>
    )
}