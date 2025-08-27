"use client"

import { motion, useScroll } from "motion/react"
import { useRef } from "react"

function Item() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    console.log(scrollYProgress.get())

    return (
        <section style={{ display: 'flex'}}>
            <div>
                <div style={{ 
                            position: 'fixed',
                            width: 100, height: 20, backgroundColor: 'black'}}>
                    <motion.div
                        id="scroll-indicator"
                        style={{
                            left: 0,
                            top: 0,
                            width: `${scrollYProgress.get() * 100}%`,
                            backgroundColor: "#ff0088",
                            height: 20,
                        }}
                    />
                </div>

                <div ref={ref} style={{ marginTop: 100, height: 1000, width: 200, background: 'green' }}>
                </div>
            </div>
        </section>
    )
}

export default function Test2() {
    return (
        <>
            <Item />

        </>
    )
}

/**
 * ==============   Styles   ================
 */

const itemContainer: React.CSSProperties = {
    height: "100vh",
    maxHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}


const item: React.CSSProperties = {
    width: 200,
    height: 250,
    border: "2px dotted #ff0088",
    position: "relative",
}
