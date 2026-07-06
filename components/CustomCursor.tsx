'use client';

import { useEffect, useRef } from 'react';

/**
 * Two-part custom cursor: a small dot that tracks the mouse exactly, and a
 * larger ring that eases toward it (lerp) for a soft trailing feel. The ring
 * grows and shows a label when hovering interactive elements marked with
 * `data-cursor` (or any link/button).
 *
 * Only active on fine-pointer devices (desktop mice/trackpads) — untouched
 * on touch devices, and disabled for prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reduceMotion) return;

    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      // ease the ring toward the pointer for a trailing effect
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const setHoverState = (target: EventTarget | null) => {
      const el = target instanceof Element ? target.closest<HTMLElement>('a, button, [data-cursor]') : null;
      if (el) {
        ring.dataset.state = 'hover';
        label.textContent = el.dataset.cursor || (el.tagName === 'A' || el.tagName === 'BUTTON' ? 'View' : '');
      } else {
        ring.dataset.state = 'default';
        label.textContent = '';
      }
    };

    const onOver = (e: MouseEvent) => setHoverState(e.target);
    const onDown = () => ring.setAttribute('data-pressed', 'true');
    const onUp = () => ring.removeAttribute('data-pressed');
    const onLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };
    const onEnterWindow = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeaveWindow);
    document.addEventListener('mouseenter', onEnterWindow);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.removeEventListener('mouseenter', onEnterWindow);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" data-state="default" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
}
