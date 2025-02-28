"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ComponentProps, Dispatch, FC, SetStateAction } from "react";

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui";
import { cn } from "@/shared/utils";

type DatePickerProps = ComponentProps<typeof Calendar> & {
  date: Date;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  className?: string;
};

export const DatePicker: FC<DatePickerProps> = (props) => {
  const { date, setDate, className } = props;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            "flex items-center gap-2",
            !date && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
