import { FC, ReactNode } from "react";

import { Header } from "@/widgets";

type AuthorizedLayoutProps = {
  children: ReactNode;
};

const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ children }) => (
  <div className="wrapper" data-testid="AuthorizedLayout">
    <Header />
    {children}
  </div>
);

export default AuthorizedLayout;
