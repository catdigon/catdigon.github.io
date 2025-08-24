import { Card } from "react-bootstrap";
import ImageProjectDisplay from "../../../ImageDisplay/ImageComponent/ImageComponent";
import { StyledProjectCard } from "../ProjectCardLayout.styled";

export default function ProjectSummary() {

    return (
        <>
        <StyledProjectCard>
            <Card.Body>
                <Card.Title>The Challenge</Card.Title>
                <Card.Text>
                    The original website presents a dense, overwhelming landing page, a cluttered menu, and an outdated visual hierarchy. For new users, it's easy to get lost.
                </Card.Text>

                <ImageProjectDisplay imageSrc={"/cinemateca.jpg"} imageAlt={"Cinemateca Website"} isLink={false} />

            </Card.Body>
            </StyledProjectCard>
        </>
    )
}