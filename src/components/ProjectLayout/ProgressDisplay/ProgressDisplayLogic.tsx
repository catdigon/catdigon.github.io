import { useRef, useState, useEffect } from "react";

export function useSectionProgress(sectionIds: string[]) {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [progress, setProgress] = useState(
    Object.fromEntries(sectionIds.map(id => [id, 0]))
  );
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const viewMiddle = window.scrollY + window.innerHeight / 2;
      const nextProgress: { [key: string]: number } = {};
      let currentSection: string | null = null;

      sectionIds.forEach(id => {
        const el = sectionRefs.current[id];
        if (!el) return;
        const start = el.offsetTop;
        const end = start + el.offsetHeight;
        const p = Math.max(0, Math.min(1, (viewMiddle - start) / (end - start)));
        nextProgress[id] = p;
        if (viewMiddle >= start && viewMiddle < end) currentSection = id;
      });

      setProgress(prev => {
        let changed = false;
        for (const key of sectionIds) {
          if (Math.abs((prev[key] ?? 0) - (nextProgress[key] ?? 0)) > 0.001) {
            changed = true;
            break;
          }
        }
        return changed ? nextProgress : prev;
      });

      if (currentSection && currentSection !== activeSection) setActiveSection(currentSection);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [activeSection, sectionIds]);

  return { sectionRefs, progress, activeSection };
}
