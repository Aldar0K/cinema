import { FC, ReactNode } from "react";

type UnauthorizedLayoutProps = {
  children: ReactNode;
};

const UnauthorizedLayout: FC<UnauthorizedLayoutProps> = ({ children }) => (
  <div className="wrapper" data-testid="UnauthorizedLayout">
    <h2>UnauthorizedLayout</h2>
    {children}
  </div>
);

export default UnauthorizedLayout;
