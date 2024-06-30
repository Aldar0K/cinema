import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <header>{/* <Navbar /> */}</header>

      <main className="app">{children}</main>

      <footer className="p-4 bg-blue-300/50"></footer>
    </>
  );
};

export default MainLayout;
