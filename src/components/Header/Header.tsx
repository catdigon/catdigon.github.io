import { StyledHeader } from './Header.styled';
import HeaderArt from './HeaderArt';
import HeaderPresentation from './HeaderPresentation';

export default function Header() {

    return (
        <>
            <StyledHeader>
                <HeaderPresentation />
                <HeaderArt />
            </StyledHeader>
        </>
    )
}