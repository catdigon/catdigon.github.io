import Card from 'react-bootstrap/Card';
import { OtherProjectsText } from './OtherProjectsCardText';
import { BsChevronRight } from 'react-icons/bs';
import ButtonCTA from '../../Button/ButtonCTA';
import styled from 'styled-components';
import { Link } from 'react-router';
import { appRoutes } from '../../../data/constants';


export default function OtherProjectsCard() {
  return (
    <>
      <StyledCard>
        <Card>
          <Card.Body className="text-end">
            <Card.Title>{OtherProjectsText.title}</Card.Title>
            <Card.Text>{OtherProjectsText.text}</Card.Text>

            <Link to={appRoutes.OTHER_PROJECTS}>
              <ButtonCTA
                aria-label="Other Projects">
                {OtherProjectsText.button}
                <BsChevronRight style={{ marginLeft: "0.5rem" }} />
              </ButtonCTA>
            </Link>

          </Card.Body>
        </Card>
      </StyledCard>
    </>
  );
}

export const StyledCard = styled.div`
  .card{
    max-width: 38rem;
  }
`