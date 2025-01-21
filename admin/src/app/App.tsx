import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { PageSkeleton } from "@/shared/ui";
import { AppRouter } from "./providers/app-router";
import { StoreProvider } from "./providers/store-provider";
import { ThemeProvider } from "./providers/theme-provider";

const App = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <StoreProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </StoreProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
