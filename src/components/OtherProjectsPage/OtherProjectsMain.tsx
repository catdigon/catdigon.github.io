import GradientArea from "../GradientArea/GradientArea";
import ProjectsBreackLine from "../BreakLine/ProjectsBreak";
import Hero from "../Hero/Hero";

interface Props {
    children: React.ReactNode
}

export default function OtherProjectsLayout({ children }: Props) {

    return (

        <>
            <Hero
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