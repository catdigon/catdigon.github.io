import { StyledLinkProgressBar } from "./LinkProgressBar.styled";
import { motion, MotionValue } from "motion/react"
import { useEffect, useState } from "react"

interface Props {
    ids: string[];
    state: string;
    projectProgresses: Array<MotionValue<number> | undefined>;
}

export default function LinkProgressBar({ ids, state , projectProgresses }: Props) {

    
    const [progressValues, setProgressValues] = useState<number[]>([])

    useEffect(() => {

        function updateProgress() {
            const centerY = window.screenY + window.innerHeight / 2

            const newProgress = ids.map((id) => {
                const el = document.getElementById(id)
                if (!el) return 0

                const rect = el.getBoundingClientRect()
                const sectionTop = rect.top + window.screenY
                const sectionHeight = rect.height
                const sectionCenterStart = sectionTop - window.innerHeight / 2
                const sectionCenterEnd =
                sectionTop + sectionHeight - window.innerHeight / 2

                if (centerY <= sectionCenterStart) return 0
                if (centerY >= sectionCenterEnd) return 100

                return (
                    ((centerY - sectionCenterStart) /
                (sectionCenterEnd - sectionCenterStart)) * 
                100
                )
            })
            setProgressValues(newProgress)
        }

        updateProgress()
        window.addEventListener("scroll", updateProgress)
        window.addEventListener("resize", updateProgress)
        return () => {
            window.addEventListener("scroll", updateProgress)
            window.addEventListener("resize", updateProgress)
        }
        }, [ids])
    
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
                                    fontWeight: isActive ? "bold" : "",
                                    fontSize: isActive ? "16px" : "13px"
                                }}
                            >
                                <label className="section-name">
                                        {id}
                                </label>
                            </a>
                                    <motion.div
                                        id="scroll-indication"
                                        style={{
                                            scaleX: projectProgresses[i],
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: 10,
                                            originX: 0,
                                            backgroundColor: "#0080A3",
                                            borderRadius: 14,
                                        }}
                                        />                            
                        </div>
                    )
})}
                </div>
            </StyledLinkProgressBar>
        </>
    )
}