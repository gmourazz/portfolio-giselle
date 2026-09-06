import { useCallback, useEffect, useRef, useState } from "react";

interface UseCarouselResult {
  viewportRef: React.RefObject<HTMLDivElement>;
  page: number;
  pages: number;
  cardWidthCss: string;
  shiftCss: string;
  next: () => void;
  prev: () => void;
  goTo: (page: number) => void;
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
}

export function useCarousel(totalItems: number, gap: number): UseCarouselResult {
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const width = viewportRef.current?.clientWidth ?? 1000;
    const nextPerView = width < 620 ? 1 : width < 940 ? 2 : 3;
    setPerView(nextPerView);
    setPage((current) => {
      const pages = Math.ceil(totalItems / nextPerView);
      return Math.min(current, pages - 1);
    });
  }, [totalItems]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const pages = Math.ceil(totalItems / perView);

  const goTo = useCallback(
    (target: number) => setPage((target + pages) % pages),
    [pages],
  );
  const next = useCallback(() => goTo(page + 1), [goTo, page]);
  const prev = useCallback(() => goTo(page - 1), [goTo, page]);

  useEffect(() => {
    if (pages <= 1) return;
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  }, [next, pages]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) (delta < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return {
    viewportRef,
    page,
    pages,
    cardWidthCss: `calc((100% - ${(perView - 1) * gap}px) / ${perView})`,
    shiftCss: `calc(${-page} * (100% + ${gap}px))`,
    next,
    prev,
    goTo,
    onTouchStart,
    onTouchEnd,
  };
}
