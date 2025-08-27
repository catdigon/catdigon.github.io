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
                        <div 
                        key={id} style={{ 
                            marginBottom: isActive ? "0.6rem" : "0.3rem"
                             }}>
                            <a
                                key={id}
                                //href={`#${id}`}
                                onClick={ (e) =>{
                                    e.preventDefault()
                                document.getElementById(id)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                })
                                console.log(id)
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