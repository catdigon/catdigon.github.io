import { StyledList } from "./List.styled";

interface Props{
    children : React.ReactNode;
}

export default function CardList({children}: Props){
    return(
        <>
        <StyledList>
            {children}
        </StyledList>
        </>
    )
}