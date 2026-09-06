import { useEffect, useState } from "react";

interface ScrollProgress {
  progress: number;
  compact: boolean;
}

export function useScrollProgress(): ScrollProgress {
  const [state, setState] = useState<ScrollProgress>({ progress: 0, compact: false });

  useEffect(() => {
    const scroller = document.scrollingElement ?? document.documentElement;

    const onScroll = () => {
      const max = Math.max(1, scroller.scrollHeight - window.innerHeight);
      const y = scroller.scrollTop;
      setState({ progress: Math.min(100, (y / max) * 100), compact: y > 40 });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
