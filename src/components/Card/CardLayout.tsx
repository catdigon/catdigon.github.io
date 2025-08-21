import { Col, Row } from "react-bootstrap";
import CardItem, { type Card } from "./Card";

interface Props {
  data: Card[];
  showText?: boolean;
  showLabel?: boolean;
}



export default function CardLayout({ data, showText = true, showLabel = true }: Props) {
  return (
    <>
      
        <Row className="g-4">
          {data.map((project, idx) => (
            
            <Col key={idx} xs={12} md={4}>
              
            <CardItem card={project} showText={showText} showLabel={showLabel}/>
              
            </Col>
          ))}

        </Row>

     
    </>
  );
}