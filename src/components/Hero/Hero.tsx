import ButtonCTA from '../Button/ButtonCTA';
import HeroPresentation from './HeroText/HeroPresentation';

interface Props {
    id?: string;
    title: string;
    text: React.ReactNode;
    text2?: string;
    isButton?: boolean;
    button?: React.ReactNode;
    link?: string;
    children: React.ReactNode;
}

export default function Hero({ id, title, text, text2, isButton, button, link, children }: Props) {

    return (
            <div id={id} className='sticky top-0 -z-10'>
                <div className="hero min-h-screen" style={{paddingTop:"48px", minHeight: "80vh", width:"100%"}}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {children}
                        <div>
                            <HeroPresentation
                                title={title}
                                text={text}
                                text2={text2} />

                            {isButton && (
                                    <ButtonCTA className='btn-presentation'
                                        href={link}
                                        target='_blank' rel='noopener'>
                                        {button}
                                    </ButtonCTA>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}