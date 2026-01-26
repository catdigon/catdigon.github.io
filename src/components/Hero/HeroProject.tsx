import styled from 'styled-components';

interface Props {
    id?: string;
    title: string;
    text: React.ReactNode;
    text2?: string;
    children: React.ReactNode;
    color?: string;
}

export default function HeroProject({ id, title, text, text2, children, color }: Props) {

    return (
        <HeroPresentationStyle id={id} className="hero md:h-[90vh] pt-4 md:pt-0" $bg={color}>
            <div className="hero-content p-0 flex-col md:flex-row-reverse">
                {children}
                <div className="card-body">
                    <h1>{title}</h1>
                    <div className='hero-text'>{text}</div>
                    <p className="card-text2">{text2}</p>
                </div>
            </div>
        </HeroPresentationStyle>
    )
}

const HeroPresentationStyle = styled.div <{ $bg?: string }>`
    background: ${({ $bg }) => $bg || "white"};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  .hero-text{
    font-size: 32px;

    span {
    font-size: inherit;
    }
  }

  .card-text2{
  font-size: 20px;
  font-weight: 800;
  }
`