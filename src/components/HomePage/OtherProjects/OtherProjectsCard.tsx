import { OtherProjectsText } from './OtherProjectsCardText';
import { BsChevronRight } from 'react-icons/bs';
import { appRoutes } from '../../../data/constants';
import { HashLink } from 'react-router-hash-link';


export default function OtherProjectsCard() {
  return (
    <>
        <div className='card'>
          <div className="text-end">
            <h3>{OtherProjectsText.title}</h3>
            
            <p>{OtherProjectsText.text}</p>

            <HashLink to={appRoutes.OTHER_PROJECTS}>
              {OtherProjectsText.button}
              <BsChevronRight style={{ marginLeft: "0.5rem" }} />
            </HashLink>

          </div>
        </div>
    </>
  );
}

