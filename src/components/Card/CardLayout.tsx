import { Col, Row } from "react-bootstrap";
import CardItem from "./Card";
import type { CardProject} from "../../data/models";


interface Props {
  data: CardProject[];
  showText?: boolean;
  showLabel?: boolean;
  showBadgeList?: boolean;
}

export default function CardLayout({ data, showText, showLabel, showBadgeList}: Props) {
  return (
    <>

      <Row className="g-4">
        {data.map((project, idx) => (

          <Col key={idx} xs={12} md={4}>

            <CardItem card={project}
            showText={showText}
            showLabel={showLabel} 
            showBadgeList={showBadgeList} />

          </Col>
        ))}

      </Row>


    </>
  );
}