import { useEffect, useState } from "react";
import { useRef } from "react";

interface IntersectionObserverEntry {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  isIntersecting: boolean;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}

type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[]
) => void;

const LazyImage: React.FC<{ image: string }> = ({ image }) => {
  const ref = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {inView ? (
        <img
          fetchPriority="high"
          src={`https://image.tmdb.org/t/p/w500${image}`}
          className="block object-cover w-full h-full rounded-t-lg group-hover:opacity-50"
        />
      ) : (
        <img
          ref={ref}
          className="block object-cover w-full h-full rounded-t-lg bg-slate-400"
        />
      )}
    </>
  );
};

export default LazyImage;
