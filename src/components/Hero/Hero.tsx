import { StyledBtnContainer} from './Hero.styled';
import ButtonCTA from '../Button/ButtonCTA';
import HeroPresentation from './HeroText/HeroPresentation';

interface Props {
    id?: string;
    title: string;
    text: string;
    text2?: string;
    isButton?: boolean;
    button?: React.ReactNode;
    link?: string;
    children: React.ReactNode;
}

export default function Hero({ id, title, text, text2, isButton, button, link, children }: Props) {

    return (
            <div id={id}>
                <div className="hero min-h-screen" style={{minHeight: "80vh"}}>
                    <div className="hero-content flex-col lg:flex-row-reverse" style={{alignItems: "initial"}}>
                        {children}
                        <div>
                            <HeroPresentation
                                title={title}
                                text={text}
                                text2={text2} />

                            {isButton && (
                                <StyledBtnContainer>
                                    <ButtonCTA className='btn-presentation'
                                        href={link}
                                        target='_blank' rel='noopener'>
                                        {button}
                                    </ButtonCTA>
                                </StyledBtnContainer>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}