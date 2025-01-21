import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageSkeleton } from "@/shared/ui";
import { AppRouter } from "./providers/app-router";
import { StoreProvider } from "./providers/store-provider";
import { ThemeProvider } from "./providers/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <StoreProvider>
        <BrowserRouter>
          <Suspense fallback={<PageSkeleton />}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
