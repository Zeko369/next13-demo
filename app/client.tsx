"use client";

import { PostType } from "@prisma/client";

export const ClientComponent = () => {
  return <h2>Client component: {Object.keys(PostType).join(", ")}</h2>;
};
