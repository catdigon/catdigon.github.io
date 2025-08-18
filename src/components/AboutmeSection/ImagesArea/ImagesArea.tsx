import FigueiraImg from "./Images/FigueiraImg.";
import MeImg from "./Images/MeImg";
import { StyledFigueira, StyledMe } from "./ImagesArea.styled";


export default function ImagesArea() {

    return (
        <>
            <StyledMe>
                <MeImg />
            </StyledMe>

            <StyledFigueira>
                <FigueiraImg />
            </StyledFigueira>
        </>
    )
}