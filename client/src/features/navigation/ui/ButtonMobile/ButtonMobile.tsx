"use client";

import { Menu, X } from "lucide-react";
import { FC } from "react";

import { Button } from "@/shared/ui";

type ButtonMobileProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

export const ButtonMobile: FC<ButtonMobileProps> = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <Button
      variant="outline"
      size="icon"
      className="md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      <span className="sr-only">Toggle menu</span>
    </Button>
  );
};
