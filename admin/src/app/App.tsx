import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/shared/store";
import { AppRouter } from "./providers/app-router";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
