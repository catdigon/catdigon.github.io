import styled from 'styled-components';

interface Props {
    id?: string;
    title: string;
    text: React.ReactNode;
    text2?: string;
    children: React.ReactNode;
}

export default function Hero({ id, title, text, text2, children }: Props) {

    return (
        <div id={id} className='sticky top-20 -z-10'>
            <div className="hero" style={{ minHeight: "80vh", width: "100%" }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {children}
                    <div>
                        <HeroPresentationStyle>
                            <div className="card-body">
                                <h1>{title}</h1>
                                <span><p>{text}</p></span>
                                <p className="card-text2">{text2}</p>
                        </div>
                        </HeroPresentationStyle>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HeroPresentationStyle = styled.div`
  p{
    font-size: 32px;
  }

  .card-text2{
  font-size: 20px;
  font-weight: 800;
  }
`