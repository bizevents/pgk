import { useScrollReveal } from "../hooks";

/**
 * Wraps children in a div that fades + slides up into view
 * once it enters the viewport.
 *
 * Props:
 *   delay     {number}  – animation-delay in ms (default 0)
 *   className {string}  – extra class names forwarded to the wrapper div
 */
export default function RevealSection({ children, delay = 0, className = "" }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}