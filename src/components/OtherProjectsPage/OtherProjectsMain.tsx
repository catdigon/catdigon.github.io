import GradientArea from "../GradientArea/GradientArea";
import Header from "../Header/Header";
import ProjectsBreackLine from "../HomePage/BreakLine/ProjectsBreak";

interface Props {
    children: React.ReactNode
}

export default function OtherProjectsLayout({ children }: Props) {

    return (

        <>
            <Header
                title={"Other Creative Projects"}
                text={"This page brings together a selection of projects I've contributed to ouside the UX field. These works reflect my ongoing interest in narrative, colaboration, and creative technology."}
                children={undefined} />
            <div style={{ marginTop: "-10rem" }}>
                <GradientArea>
                    <ProjectsBreackLine />
                    {children}
                </GradientArea>
            </div>
        </>
    )
}