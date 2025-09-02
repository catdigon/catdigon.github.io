

import { MotionValue, useScroll } from "motion/react";
import { useEffect, useRef } from "react";

interface Props{
    id: string;
    setProjectSectionProgress: React.Dispatch<React.SetStateAction<MotionValue<number> | undefined >>;
    children: React.ReactNode;
}

export default function ProjectSection({ id, setProjectSectionProgress, children }: Props) {

    const ref = useRef(null)

    const {scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    })

    useEffect(() => {
        setProjectSectionProgress(scrollYProgress)
    }, [scrollYProgress])

    return (
        <>
            <section id={id} ref={ref}>
                {children}
            </section>
        </>
    )
}