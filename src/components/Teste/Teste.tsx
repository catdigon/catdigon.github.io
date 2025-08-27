import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

export default function ScrollTest() {

    //ANCHOR - ScrollSpy with IntersectionObserver
    const [activeID, setActiveID] = useState<string | null>(null);
    //ANCHOR - Scrool progress bar
    const [progressMap, setProgressMap] = useState<Record<string, number>>({});

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        //ANCHOR - ScrollSpy with IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveID(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 } //60% da section is visibel = active
        );

        sections.forEach((section) => observer.observe(section));


        //ANCHOR - Scrool progress bar
    const handleScroll = () => {
    const newMap: Record<string, number> = {};
    const viewportHeight = window.innerHeight;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const totalHeight = rect.height;

        const scrolledInside = Math.min(
            Math.max(viewportHeight - rect.top, 0), totalHeight
        );
        let progress = (scrolledInside / totalHeight) * 100;
        if (progress > 100) progress = 100;
        if (progress < 0) progress = 0;

        newMap[section.id] = progress;
    })

    setProgressMap(newMap);
   };

   window.addEventListener("scroll", handleScroll, {passive: true});
   window.addEventListener("revise", handleScroll);
   handleScroll();


        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        };
    }, []);


    return (
        <>
            <div id="lateral-nav"
                style={{
                    position: "fixed",
                    top: "10px",
                    left: "10px"
                }}>
                    //ANCHOR - Create a sting with all option of the navbar
                {["section1", "section2", "section3"].map((id) => (
                    <>
                    <a
                        key={id}
                        href={`#${id}`}
                        style={{
                            marginRight: "10px",
                            fontWeight: activeID === id ? "bold" : "normal",
                            color: activeID === id ? "dodgerblue" : "black"
                        }}
                    >
                        {id}
                    </a>
                    <ProgressBar
                    variant="info"
                    now={progressMap[id] || 0} 
                    style={{width: "100px"}}/>
                    </>
                ))}
            </div>

            
                    

            <div style={{ height: "200vh", background: "white" }}>Olááá</div>   
            <section id="section1" style={{ height: "200vh", background: "red" }}>
                <h1>Secção 1 - Red</h1>
            </section>
            <section id="section2" style={{ height: "200vh", background: "blue" }}>
                <h1>Secção 1 - Blue</h1>
            </section>
            <section id="section3" style={{ height: "200vh", background: "green" }}>
                <h1>Secção 1 - green</h1>
            </section>
             <div style={{ height: "200vh", background: "white" }}>Olááá</div>   
        </>
    )
}
