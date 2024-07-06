import { FC, ReactNode } from "react";

type CommonLayoutProps = {
  children: ReactNode;
};

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => (
  <div className="wrapper" data-testid="CommonLayout">
    <h2>CommonLayout</h2>
    {children}
  </div>
);

export default CommonLayout;
