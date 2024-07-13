import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./providers/app-router";
import { StoreProvider } from "./providers/store-provider";

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
