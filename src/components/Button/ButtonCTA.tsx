import Button, { type ButtonProps } from 'react-bootstrap/Button';
import styled from 'styled-components';

interface Props extends ButtonProps {
    children: React.ReactNode;
}

export default function ButtonCTA({ children, ...props }: Props) {

    return (
        <Overide>
            <Button variant='dark' {...props}>
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