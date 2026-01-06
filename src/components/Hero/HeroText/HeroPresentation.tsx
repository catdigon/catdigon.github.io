import styled from "styled-components"

interface Props {
    title: string;
    text: React.ReactNode;
    text2?: string;
}

export default function HeroPresentation({ title, text, text2 }: Props) {

    return (
        <>
        <Overide>
            <div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <span><p>{text}</p></span>
                    <p className="card-text2">{text2}</p>
                </div>
            </div>
            </Overide>
        </>
    )
}

const Overide = styled.div`
  p{
    font-size: 32px;
  }

  .card-title{
  font-size: 50px;
  }

  .card-text2{
  font-size: 20px;
  font-weight: 800;
  }
`
