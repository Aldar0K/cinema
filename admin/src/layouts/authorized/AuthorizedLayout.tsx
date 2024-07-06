import { FC, ReactNode } from "react";

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => (
  <div className="wrapper" data-testid="AuthorizedLayout">
    <h2>AuthorizedLayout</h2>
    {children}
  </div>
);

export default AuthorizedLayout;
