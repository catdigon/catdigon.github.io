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
    box-shadow: 0 0 0 0px rgba(0, 128, 163, 0.5),
            0 0 10px rgba(0, 128, 163, 0.3),
            0 0 30px rgba(0, 128, 163, 0.2);
    }
`
