import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * Gets token from cookie.
     */
    const token = Cookies.get("token");

    /**
     * If there is a token (any token, valid or invalid)
     * Navigate to index. when accessing a protected route,
     * The authorization process will do the rest of the work.
     */
    if (token) {
      navigate("/");
    }
  }, []);
  const pathname = window.location.pathname;

  const signup = <Link to="/auth/signup">signup</Link>;
  const login = <Link to="/auth/login">login</Link>;

  return <main>{children}</main>;
};

export default AuthLayout;
