import type { FC, PropsWithChildren } from "react";

export const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen" data-testid="common-layout">
      <main>
        <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
      </main>
    </div>
  );
};
