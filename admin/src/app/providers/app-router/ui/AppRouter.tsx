import { FC, useMemo } from "react";
import { Routes } from "react-router-dom";

import { getIsAuth } from "@/entities/auth";
import { useAppSelector } from "@/shared/hooks";
import { AdminRoutes } from "./AdminRoutes";
import { CommonRoutes } from "./CommonRoutes";
import { UnauthorizedRoutes } from "./UnauthorizedRoutes";

export const AppRouter: FC = () => {
  const isAuth = useAppSelector(getIsAuth);

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
