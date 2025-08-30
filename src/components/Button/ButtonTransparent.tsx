import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export default function ButtonTransparent({ children }: Props) {

    return (
        <Overide>
            <Button variant='light'>
                {children}
            </Button>
        </Overide>
    )
}

const Overide = styled.div`
    button{
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
    }

    .btn:hover{
        color: #0080A3;
        background-color: transparent !important;
        border-color: transparent !important;
        filter: drop-shadow(0 0 10px rgba(0, 128, 163, 0.4))
          drop-shadow(0 0 20px rgba(0, 128, 163, 0.2)) !important;
    }
`