import { toast } from "@/shared/hooks";

const DEFAULT_DURATION = 3000;

export const notify = {
  success: (text: string) =>
    toast({
      title: "Успешно",
      description: text,
      variant: "default",
      duration: DEFAULT_DURATION,
    }),

  error: (text: string) =>
    toast({
      title: "Ошибка",
      description: text,
      variant: "destructive",
      duration: DEFAULT_DURATION,
    }),

  warning: (text: string) =>
    toast({
      title: "Внимание",
      description: text,
      variant: "default",
      className: "bg-orange-100 dark:bg-orange-900",
      duration: DEFAULT_DURATION,
    }),

  info: (text: string) =>
    toast({
      title: "Информация",
      description: text,
      variant: "default",
      className: "bg-blue-100 dark:bg-blue-900",
      duration: DEFAULT_DURATION,
    }),
};
