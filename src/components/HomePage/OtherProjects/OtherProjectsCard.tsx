import { OtherProjectsText } from './OtherProjectsCardText';
import { BsChevronRight } from 'react-icons/bs';
import styled from 'styled-components';
import { appRoutes } from '../../../data/constants';
import { HashLink } from 'react-router-hash-link';


export default function OtherProjectsCard() {
  return (
    <>
      <StyledCard>
        <div className='card'>
          <div className="text-end">
            <h3>{OtherProjectsText.title}</h3>
            
            <p>{OtherProjectsText.text}</p>

            <HashLink to={appRoutes.OTHER_PROJECTS} className="button-cta-style">
              {OtherProjectsText.button}
              <BsChevronRight style={{ marginLeft: "0.5rem" }} />
            </HashLink>

          </div>
        </div>
      </StyledCard>
    </>
  );
}

export const StyledCard = styled.div`
  .card{
    max-width: 38rem;
  }

  .button-cta-style {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .button-cta-style:hover {
    background-color: #0080A3;
    box-shadow: 0 0 0 0px rgba(0, 128, 163, 0.5),
                0 0 10px rgba(0, 128, 163, 0.3),
                0 0 30px rgba(0, 128, 163, 0.2);
  }
`