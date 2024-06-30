import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts";
import { HomePage, IceCreamPage, SigninPage } from "@/pages";
import { store } from "@/shared/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="auth">
              <Route path="sign-in" element={<SigninPage />} />
            </Route>
            <Route path="ice-cream" element={<IceCreamPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MainLayout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
