import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import { login, register, getMe } from "../services/auth.api.jsx";

export function UseAuth() {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password) => {
    setLoading(true);

    try {
      const respone = await login(username, password);

      setUser(respone.user);
      return respone
    } catch (error) {jk
        throw error
    }finally{

        setLoading(false);
    }
  };

  const HandleRegister = async (username, email, password, bio) => {
    setLoading(true);
    try {
      const respone = await register(username, email, password, bio);
      setUser(respone.user);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    user,
    loading,
    handleLogin,
    HandleRegister,
  };
}
