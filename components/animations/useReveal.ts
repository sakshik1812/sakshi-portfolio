"use client";

import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  amount?: number;
  once?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  amount = 0.15,
  once = true,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    let frame = 0;
    let done = false;

    function teardown() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
    }

    function schedule() {
      if (frame || done) return;
      frame = requestAnimationFrame(evaluate);
    }

    function evaluate() {
      frame = 0;
      const el = ref.current;
      if (!el || done) return;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visible =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

      const needed = Math.min(rect.height * amount, viewportHeight * 0.4);

      if (visible > 0 && visible >= needed) {
        setInView(true);
        if (once) {
          done = true;
          teardown();
        }
      } else if (!once) {
        setInView(false);
      }
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    schedule();

    return teardown;
  }, [amount, once]);

  return { ref, inView };
}

export default useReveal;
