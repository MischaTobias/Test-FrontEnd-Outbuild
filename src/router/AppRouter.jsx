import { Navigate, Route, Routes } from "react-router-dom";

import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../ui";
import { AuthRoutes } from "../auth";
import { DashboardRoutes } from "../dashboard";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DashboardRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
