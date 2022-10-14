import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e: MediaQueryListEvent) => {
            console.log(e.matches);
            setMatches(e.matches);
        };
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });
    
    return matches;
};
