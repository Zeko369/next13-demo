"use client";

import { useStyledComponentsRegistry } from "../styled-components";
import { useServerInsertedHTML } from "next/navigation";

export default function StyledComponentsRoot({ children }: { children: React.ReactNode }) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
