"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Simon" });
  return <div>client says: {data.greeting}</div>;
};
