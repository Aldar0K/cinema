import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageSkeleton, Toaster } from "@/shared/ui";
import { AppRouter } from "./providers/app-router";
import { ErrorBoundary } from "./providers/error-boundary";
import { StoreProvider } from "./providers/store-provider";
import { ThemeProvider } from "./providers/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <StoreProvider>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<PageSkeleton />}>
              <AppRouter />
            </Suspense>
            <Toaster />
          </ErrorBoundary>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
