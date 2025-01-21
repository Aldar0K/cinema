import IconCalendar from "@/shared/assets/icons/calendar.svg";

export type NavigationLink = {
  title: string;
  link: string;
  preloadFn?: () => void;
  Icon?: typeof IconCalendar;
};
