export const createSeatLayout = (rows: number, seatsPerRow: number) =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: seatsPerRow }, (_, seatIndex) => ({
      row: rowIndex + 1,
      place: seatIndex + 1,
    })),
  ).flat();
