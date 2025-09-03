import { Card } from "react-bootstrap";
import styled from "styled-components";

export default function AboutMeText() {

    return (
        <>
            <Overide>
                <Card>
                    <Card.Body>
                        <Card.Title>Hi, my name is Cátia!</Card.Title>

                        <Card.Text>
                            I live by the sea in Figueira da Foz, Portugal.
                            My path into design grew from a background in research, documentary cinema, theatre, and education.
                        </Card.Text>

                        <Card.Text>
                            I began in the arts, fascinated by how creativity can bring people together.
                            I once dreamed of directing films, but editing captured me - the structures, rhythmas, and problem-solving behind every story.
                            That same love for structure and intention eventually led me to design.
                        </Card.Text>

                        <Card.Text>
                            My approach blends curiosity, creative chaos, and structured research.
                            I start with a question, explore perspectives, and shape responses based on what I discover - not assumptions.
                        </Card.Text>

                        <Card.Text>
                            I believe design, like art, should listen before it speaks.
                            The workd isn't made for a few - it's shaped by all of us, together.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Overide>
        </>
    )
}

const Overide = styled.div`

.card{
    width: 80%;
    background-color: transparent !important;
    border: none !important;
};

.h5{
    font-size: 2rem;
}
    
`