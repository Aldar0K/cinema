import type { FC, PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui";

export const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen" data-testid="common-layout">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
      </main>
      <Toaster />
    </div>
  );
};
