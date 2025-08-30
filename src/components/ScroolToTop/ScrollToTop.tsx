import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });
    }, [pathname]);

    return null;
}