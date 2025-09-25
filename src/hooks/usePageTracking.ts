import { useEffect } from "react";
import { useLocation } from "react-router";

export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        if ((window as any).gtag) {
            (window as any).gtag("config", "G-1WMW12R4P6", {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
                page_title: document.title,
            })
        }
    }, [location]);
}