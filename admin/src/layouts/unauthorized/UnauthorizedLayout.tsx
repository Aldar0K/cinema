import type { FC, PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui";

export const UnauthorizedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-testid="unauthorized-layout"
    >
      <main>
        <div className="w-full max-w-7xl px-4">{children}</div>
      </main>
      <Toaster />
    </div>
  );
};
