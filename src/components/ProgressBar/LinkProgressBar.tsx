import { StyledLinkProgressBar } from "./LinkProgressBar.styled";
interface Props {
    id: string;
    state: string;
}

export default function LinkProgressBar({ id, state }: Props) {

    return (
        <>
            <StyledLinkProgressBar>
                <a
                    key={id}
                    href={`#${id}`}
                    style={{
                        fontWeight: state === id ? "bold" : "normal",
                        fontSize: state === id ? "16px" : "13px"
                    }}
                >
                    <label>
                        {id}
                    </label>
                </a>
            </StyledLinkProgressBar>
        </>
    )
}