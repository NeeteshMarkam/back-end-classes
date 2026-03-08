import React from "react";
import AppRouter from "./AppRouter.jsx";
import { AuthProvider } from "./feature/auth/auth.context";

import {PostContextProvider} from './feature/post/post.context.jsx'

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
