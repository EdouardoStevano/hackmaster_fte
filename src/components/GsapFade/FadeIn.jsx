import { gsap } from "gsap";
import React, { useLayoutEffect, useEffect, useRef, forwardRef } from "react";

const FadeIn = forwardRef(({ children, stagger = 0, y = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(el.current.children, {
        opacity: 0,
        stagger: stagger,
        y: y,
      });
    });
    return () => ctx.revert();
  }, [stagger, y]);

  useEffect(() => {
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <span ref={el}>{children}</span>;
});

export default FadeIn;
