import { HashLink } from "react-router-hash-link";
import { OtherProjectsText } from "./OtherProjectsSectionText";
import { appRoutes } from "../../../data/constants";
import { BsChevronRight } from "react-icons/bs";

export default function OtherProjectsSection() {

  return (
    <>
      <div className='card'>
        <div className="text-end">
          <h3>{OtherProjectsText.title}</h3>

          <p>{OtherProjectsText.text}</p>

          <HashLink to={appRoutes.OTHER_PROJECTS}
            className="btn btn-ghost text-md">
            {OtherProjectsText.button}
            <BsChevronRight style={{ marginLeft: "0.5rem" }} />
          </HashLink>

        </div>
      </div>

    </>
  )
}
