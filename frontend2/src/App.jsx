import React from "react";
import AppRouter from "./AppRouter.jsx";
import { AuthProvider } from "./feature/auth/auth.context";
import Feed from "./feature/post/pages/Feed.jsx";

const App = () => {
  return (
    <div>
      <AuthProvider>

        <PostContextProvider>
          <AppRouter />
        </PostContextProvider>

      </AuthProvider>
    </div>
  );
};

export default App;
