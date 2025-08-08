import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export default function ButtonCTA({ children }: Props) {

    return (
        <Overide>
            <Button variant='dark'>
                {children}
            </Button>
        </Overide>
    )
}

const Overide = styled.div`
    .btn:hover{
    background-color: #0080A3;
    border-color: #0080A3;
    }
`