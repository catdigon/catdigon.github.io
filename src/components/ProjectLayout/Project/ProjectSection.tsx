import { ProjectsCardsText } from "../../../data/projectsDesign";

interface Props {
    projectId: string;
    title: string;
    children: React.ReactNode;
}

export default function ProjectSection({ projectId, title, children }: Props) {

    const project = ProjectsCardsText.find((p) => p.id === projectId);

    if (!project) {
        return <p>Project not found!</p>
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-start">

                <div className="flex-1 md:flex-2 p-4 flex-col gap-8 gap-8">
                    <h3>{title}</h3>
                    <div className="space-y-4">
                    {children}
                    </div>
                </div>

            </div>
        </>
    )
}