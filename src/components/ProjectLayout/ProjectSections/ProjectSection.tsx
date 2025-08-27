

import { MotionValue, useScroll } from "motion/react";
import { useEffect, useRef } from "react";

interface Props{
    setProjectSectionProgress: React.Dispatch<React.SetStateAction<MotionValue<number> | undefined >>;
     id: string;
     children: React.ReactNode;
}

export default function ProjectSection({ setProjectSectionProgress, children, id }: Props) {

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