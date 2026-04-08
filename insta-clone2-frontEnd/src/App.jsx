import React from "react";
import AppRouter from "./AppRoutes";
import { AuthProvider } from "./feature/auth/auth.context.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>
      <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;