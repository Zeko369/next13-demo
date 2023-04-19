"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [state, setState] = useState(0);

  const timeout = useRef<number>(0);
  useEffect(() => {
    return () => {
      if (timeout.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        clearTimeout(timeout.current);
      }
    };
  }, [state]);

  const onClick = () => {
    console.log("clicked");
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      console.log("timeout");
    }, 1000) as unknown as number;
  };

  return (
    <div>
      <button onClick={() => setState((s) => s + 1)}>remount</button>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
