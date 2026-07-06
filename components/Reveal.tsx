'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  once = true,
  soft = false,
  duration,
  direction = 'up',
  distance = 24,
}: {
  children: ReactNode;
  /** delay in ms before the transition starts */
  delay?: number;
  className?: string;
  /**
   * When false, the element re-animates every time it enters or leaves the
   * viewport — fading in on scroll down, fading back out on scroll up (and
   * back in again if scrolled down a second time). Default (true) animates
   * in once and stays put, which is right for most content.
   */
  once?: boolean;
  /**
   * A gentler, slower "soothing" transition: adds a soft scale + blur to
   * the usual fade/translate for a calmer feel. Good for sections you want
   * to re-trigger (once={false}) without it feeling jumpy.
   */
  soft?: boolean;
  /** override the transition duration in ms */
  duration?: number;
  /** which direction the element travels in from — 'up' (default), 'left', or 'right' */
  direction?: 'up' | 'left' | 'right';
  /** how far (px) the element starts offset before settling into place */
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: soft ? 0.2 : 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, soft]);

  const dur = duration ?? (soft ? 1000 : 700);
  const easing = soft ? 'cubic-bezier(0.22,1,0.36,1)' : 'cubic-bezier(0.16,1,0.3,1)';

  const axisTransform =
    direction === 'left'
      ? `translateX(-${distance}px)`
      : direction === 'right'
        ? `translateX(${distance}px)`
        : `translateY(${distance}px)`;
  const hiddenTransform = soft ? `${axisTransform} scale(0.96)` : axisTransform;
  const visibleTransform = 'translateX(0) translateY(0) scale(1)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : hiddenTransform,
        filter: soft ? (visible ? 'blur(0px)' : 'blur(6px)') : undefined,
        transition: [
          `opacity ${dur}ms ${easing} ${delay}ms`,
          `transform ${dur}ms ${easing} ${delay}ms`,
          soft ? `filter ${dur}ms ${easing} ${delay}ms` : '',
        ]
          .filter(Boolean)
          .join(', '),
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}