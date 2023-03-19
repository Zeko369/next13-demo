"use client";

import { useServerInsertedHTML } from "next/navigation";
// import { getCssText } from "../../stitches.config";

export default function StitchesRoot({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    // return <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />;
    return null;
  });

  return <>{children}</>;
}
