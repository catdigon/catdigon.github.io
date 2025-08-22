
import BarProgress from "../../ProgressBar/AtiveProgressBar";
import { StyledProgressContainer } from "./ProgressDisplay.styled";

export default function ProgressDisplay() {

    return (
        <>
            <StyledProgressContainer>
                <BarProgress
                    showLabel={true}
                    label={"Summary"}
                    active={true}
                />
                <BarProgress
                    showLabel={true}
                    label={"Discovery"}
                    active={false}
                />
                <BarProgress
                    showLabel={true}
                    label={"Design"}
                    active={false}
                />
                <BarProgress
                    showLabel={true}
                    label={"Implementation"}
                    active={false}
                />
                <BarProgress
                    showLabel={true}
                    label={"Conclusion"}
                    active={false}
                />
            </StyledProgressContainer>
        </>
    )
}