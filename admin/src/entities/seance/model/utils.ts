import { isSameDay } from "date-fns";
import { GroupedSeance, Seance } from "./types";

export const groupSeances = (seances: Seance[]) => {
  const groups: GroupedSeance[] = [];

  seances.forEach((seance) => {
    const seanceDate = new Date(seance.time);
    const existingGroup = groups.find((group) =>
      isSameDay(group.date, seanceDate),
    );

    if (existingGroup) {
      existingGroup.seances.push(seance);
      // Sort by time within the day
      existingGroup.seances.sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
      );
    } else {
      groups.push({
        date: seanceDate,
        seances: [seance],
      });
    }
  });

  // Sort groups by date
  return groups.sort((a, b) => a.date.getTime() - b.date.getTime());
};
