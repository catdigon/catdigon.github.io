import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export default function CardPresentationGlass({ children }: Props) {

    return (
        <Overide>
            <Card border="light" style={{ width: '32rem' }}>
                {children}
            </Card>
        </Overide>
    )
}

const Overide = styled.div`
   .card{
        --bs-card-spacer-y: 2.6rem;
        --bs-card-spacer-x: 1.6rem;
        --bs-card-title-spacer-y: 1rem;

        background: rgba(158, 215, 224, 0.4);
        backdrop-filter: blur(4px);
        border-radius: 16px;
        border: 1px solid rgba(245, 245, 245, 0.2) !important;
        box-shadow: 1px 20px 30px 1px rgba(0, 0, 0, 0.12);
    }

    .card-body{
        display: flex;
        flex-direction: column;
    }
`