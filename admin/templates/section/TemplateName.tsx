import { FC } from "react";

import { cn } from "@/shared/utils";

type TemplateNameProps = {
  className?: string;
};

export const TemplateName: FC<TemplateNameProps> = (props) => {
  const { className } = props;

  return (
    <section
      id="template-name"
      className={cn("", className)}
      data-testid="TemplateName"
    >
      TemplateName
    </section>
  );
};
