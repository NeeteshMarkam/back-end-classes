import { RouterProvider } from "react-router";
import { router } from "./app.router";
import "./feactures/shared/styles/global.scss"

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;