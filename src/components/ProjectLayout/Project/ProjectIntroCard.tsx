import { ProjectsCardsText } from "../../../data/projectsDesign";

interface Props {
    projectId: string;
}

export default function ProjectIntroCard({ projectId }: Props) {

    const project = ProjectsCardsText.find((p) => p.id === projectId);

    if (!project) {
        return <p>Project not found!</p>
    }

    return (
        <>
            <div className="flex flex-col md:flex-row items-start">

                <div className="flex-1 md:flex-2 p-4 flex-col gap-8 gap-8">
                    <h2>Project Overview</h2>
                    <div className="space-y-4 w-full max-w-xl">
                        {project.overview?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 p-4 flex-col gap-8 self-center items-end text-right min-w-[250px] [&>div]:space-y-1">
                    <div className="gap-2">
                        <p className="font-bold">Context</p>
                        <p>{project.context}</p>
                    </div>

                    <div>
                        <p className="font-bold">Tools</p>
                        <div className="card-actions flex flex-wrap flex-1 justify-end">
                            {project.tools?.map((tool, index) => (
                                <div
                                    key={index}
                                    className="badge"
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-bold">Timeline</p>
                        <p>{project.year || ""}</p>
                    </div>

                </div>
            </div>
        </>
    )
}