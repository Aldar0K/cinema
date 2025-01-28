import { type FC, type PropsWithChildren } from "react";

import { Toaster } from "@/shared/ui";
import { Header } from "@/widgets";

export const AuthorizedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen" data-testid="authorized-layout">
      <Header />
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};
