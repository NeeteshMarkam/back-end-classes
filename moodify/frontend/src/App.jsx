import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import "./feactures/shared/styles/global.scss";
import { AuthProvider } from "./feactures/auth/auth.context";

const App = () => {
  return (
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;