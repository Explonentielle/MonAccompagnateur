"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export default function SwipeRow({
  children,
  label,
  desktopClassName = "sm:grid sm:grid-cols-3 sm:gap-6",
}: {
  children: ReactNode;
  label: string;
  desktopClassName?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const count = Children.count(children);

  const updateActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (scroller.scrollLeft > 8) setTouched(true);

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    if (scroller.scrollLeft >= maxScroll - 4) {
      setActive(count - 1);
      return;
    }

    const paddingLeft = parseFloat(getComputedStyle(scroller).paddingLeft) || 0;
    let closest = 0;
    let smallestGap = Number.POSITIVE_INFINITY;
    Array.from(scroller.children).forEach((child, index) => {
      const gap = Math.abs((child as HTMLElement).offsetLeft - paddingLeft - scroller.scrollLeft);
      if (gap < smallestGap) {
        smallestGap = gap;
        closest = index;
      }
    });
    setActive(closest);
  }, [count]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", updateActive, { passive: true });
    return () => scroller.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  function goTo(index: number) {
    const scroller = scrollerRef.current;
    const target = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !target) return;
    const paddingLeft = parseFloat(getComputedStyle(scroller).paddingLeft) || 0;
    scroller.scrollTo({ left: target.offsetLeft - paddingLeft, behavior: "smooth" });
  }

  const atEnd = active === count - 1;

  return (
    <div className="reveal relative -mx-6 sm:mx-0">
      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={`relative flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-3 [scrollbar-width:none] sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden ${desktopClassName}`}
      >
        {children}
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 sm:hidden ${
          atEnd ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="mt-2 flex flex-col items-center gap-3 sm:hidden">
        <p
          className={`flex items-center gap-1.5 text-xs font-semibold text-secondary/60 transition-opacity duration-500 ${
            touched ? "opacity-0" : "opacity-100"
          }`}
        >
          Faites glisser
          <svg viewBox="0 0 24 24" fill="none" className="animate-nudge h-4 w-4 text-primary" aria-hidden="true">
            <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </p>
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Aller à l'élément ${index + 1} sur ${count}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-primary" : "w-2 bg-secondary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
