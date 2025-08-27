import { StyledLinkProgressBar } from "./LinkProgressBar.styled";
import { useScroll } from "motion/react"
import { useEffect, useState } from "react"
import { ProgressBar } from "react-bootstrap";



interface Props {
    ids: string[];
    state: string;
}

export default function LinkProgressBarCopy({ ids, state }: Props) {

    const { scrollYProgress } = useScroll()
    const [progressValues, setProgressValues] = useState<number[]>([])

    useEffect(() => {
        const unsubcribe = scrollYProgress.on("change", (v) => {
            const totalSections = ids.length
            const sectionSize = 1 / totalSections

            const newProgress = ids.map((_, index) => {
                const start = index * sectionSize
                const end = (index + 1) * sectionSize

                if (v <= start) return 0
                if (v >= end) return 100
                return ((v - start) / (end - start)) * 100
            })
            setProgressValues(newProgress)
        })
        return () => unsubcribe()
    }, [scrollYProgress, ids])


    return (
        <>
            <StyledLinkProgressBar>
                <div>
                    {ids.map((id, i) => {
                        const isActive = progressValues[i] > 0 && progressValues[i] < 100
                        return (
                        <div key={id} style={{ marginBottom: "1rem" }}>
                            <a
                                key={id}
                                href={`#${id}`}
                                style={{
                                    fontWeight: isActive ? "bold" : "normal",
                                    fontSize: isActive ? "16px" : "13px"
                                }}
                            >
                                <label>
                                    {id}
                                </label>
                            </a>
                            <ProgressBar
                                variant="info"
                                now={progressValues[i] || 0}
                                style={{ height: "6px", marginTop: "4px" }} />
                        </div>
                    )
})}
                </div>
            </StyledLinkProgressBar>
        </>
    )
}