import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  containerId?: string;
};

export const Portal: FC<PortalProps> = ({
  children,
  containerId = "modal-root",
}) => {
  const container = document.getElementById(containerId);
  return container ? createPortal(children, container) : null;
};
