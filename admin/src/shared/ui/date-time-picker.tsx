"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { ComponentProps, Dispatch, FC, SetStateAction, useState } from "react";

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar,
} from "@/shared/ui";
import { cn } from "@/shared/utils";

type DateTimePickerProps = ComponentProps<typeof Calendar> & {
  date: Date;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  className?: string;
};

export const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const { date, setDate, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (type: "hour" | "minute", value: string) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        newDate.setHours(parseInt(value));
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      }
      setDate(newDate);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "min-w-[280px] justify-start text-left font-normal",
            "flex items-center gap-2",
            !date && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "MM/dd/yyyy HH:mm", { locale: ru })
          ) : (
            <span>MM/DD/YYYY hh:mm</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onWheel={(e) => e.stopPropagation()}
        className="w-auto p-0"
      >
        <div className="sm:flex">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            initialFocus
          />
          <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {hours.reverse().map((hour) => (
                  <Button
                    key={hour}
                    size="icon"
                    variant={
                      date && date.getHours() === hour ? "default" : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() => handleTimeChange("hour", hour.toString())}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={
                      date && date.getMinutes() === minute ? "default" : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() =>
                      handleTimeChange("minute", minute.toString())
                    }
                  >
                    {minute.toString().padStart(2, "0")}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
