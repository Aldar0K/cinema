import type { FC, PropsWithChildren } from "react";

export const UnauthorizedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      data-testid="unauthorized-layout"
    >
      <main>
        <div className="w-full max-w-7xl px-4">{children}</div>
      </main>
    </div>
  );
};
