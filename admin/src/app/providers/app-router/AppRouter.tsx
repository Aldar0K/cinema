import { FC, useMemo } from "react";
import { Routes } from "react-router-dom";

import { useAuth } from "@/entities/auth";
import { AdminRoutes } from "./AdminRoutes";
import { CommonRoutes } from "./CommonRoutes";
import { UnauthorizedRoutes } from "./UnauthorizedRoutes";

const AppRouter: FC = () => {
  const isAuth = useAuth();

  const UserRoutes = useMemo(() => {
    if (isAuth) {
      return AdminRoutes;
    }

    return UnauthorizedRoutes;
  }, [isAuth]);

  return (
    <Routes>
      {UserRoutes}
      {CommonRoutes}
    </Routes>
  );
};

export default AppRouter;
