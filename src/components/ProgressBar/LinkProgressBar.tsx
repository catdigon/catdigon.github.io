import { StyledLinkProgressBar } from "./LinkProgressBar.styled";
import { motion, MotionValue, useScroll } from "motion/react"
import { useEffect, useState } from "react"

interface Props {
    ids: string[];
    state: string;
    projectProgresses: Array<MotionValue<number> | undefined>;
}

export default function LinkProgressBar({ ids, state , projectProgresses }: Props) {

    const { scrollYProgress } = useScroll()
    const [progressValues, setProgressValues] = useState<number[]>([])

    useEffect(() => {
    
        const unsubcribe = scrollYProgress.on("change", (v) => {

            const sectionHeights = ids.map(id => {
                const el = document.getElementById(id)
                return el?.offsetHeight ?? 0
            })
            const totalHeight = sectionHeights.reduce((a, b) => a + b, 0)
            let accumulatedHeight = 0

            const newProgress = sectionHeights.map((height) => {
                const start = accumulatedHeight / totalHeight
                accumulatedHeight += height
                const end = accumulatedHeight / totalHeight

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
                        <div 
                        key={id} style={{ 
                            marginBottom: isActive ? "0.6rem" : "0.3rem"
                             }}>
                            <a
                                key={id}
                                onClick={ (e) =>{
                                    e.preventDefault()
                                document.getElementById(id)?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }}

                                style={{
                                    fontWeight: isActive ? "bold" : "",
                                    fontSize: isActive ? "16px" : "13px",
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
                                            height: isActive ? 10 : 4,
                                            originX: 0,
                                            backgroundColor: "#0080a380",
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