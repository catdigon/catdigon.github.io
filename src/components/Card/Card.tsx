import { Badge, Card, Col, Row } from "react-bootstrap";
import ButtonCTA from "../Button/ButtonCTA";
import { BsChevronRight } from "react-icons/bs";
import { StyledCard, StyledCardImgContainer } from "./Card.styled";

interface Props {
  data: Card[]
  showText?: boolean;
}

export interface Card {
  year?: string;
  title?: string,
  subtitle: string,
  text?: string,
  image: string,
  alt: string,
  label?: string,
  buttonLabel: string,
  buttonLink: string,
  abstract?: string,
}


export default function CardLayout({ data, showText = true }: Props) {
  return (
    <>
      <StyledCard>
        <Row className="g-4">
          {data.map((projects, idx) => (
            <Col key={idx} xs={12} md={4}>
              <Card>
                <StyledCardImgContainer>
                  <Card.Img
                    variant="top"
                    src={projects.image}
                    alt={projects.alt}
                  />
                </StyledCardImgContainer>

                <Card.Body>
                  {projects.label && (<Badge bg="light" text="dark">
                    {projects.label}
                  </Badge>
                  )}

                  <Card.Title>
                    {projects.subtitle}
                  </Card.Title>

                  {showText && projects.text && (
                    <Card.Text>
                      {projects.text}
                    </Card.Text>
                  )}

                  <ButtonCTA aria-label="Project">
                    {projects.buttonLabel}
                    <BsChevronRight style={{ marginLeft: "0.5rem" }} />
                  </ButtonCTA>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </StyledCard>
    </>
  );
}