import { FC } from "react";

import { classNames } from "@/shared/utils";
import cls from "./TemplateName.module.scss";

type TemplateNameProps = {
  className?: string;
};

export const TemplateName: FC<TemplateNameProps> = (props) => {
  const { className } = props;

  return (
    <section
      id="template-name"
      className={classNames(cls.section, {}, [className])}
      data-testid="TemplateName"
    >
      TemplateName
    </section>
  );
};
