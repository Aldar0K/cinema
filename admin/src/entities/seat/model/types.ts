export type Seat = {
  id: number;
  place: number;
  row: number;
  seanceId: number;
  userId?: number;
  version: number;
};

export type ReserveSeatDto = {
  seatId: number;
};

export type ReserveSeatResponse = unknown;

export type UnreserveSeatDto = {
  seatId: number;
};

export type UnreserveSeatResponse = unknown;
