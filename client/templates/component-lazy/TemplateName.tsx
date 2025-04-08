import { FC } from "react";

import { cn } from "@/shared/utils";

export type TemplateNameProps = {
  className?: string;
};

const TemplateName: FC<TemplateNameProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn("", className)} data-testid="TemplateName">
      TemplateName
    </div>
  );
};

export default TemplateName;
