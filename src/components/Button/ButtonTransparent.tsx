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
    }
`