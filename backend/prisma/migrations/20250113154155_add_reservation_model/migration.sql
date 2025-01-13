/*
  Warnings:

  - A unique constraint covering the columns `[row,place,seanceId]` on the table `Seat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SeatStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'BOOKED');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELED');

-- AlterTable
ALTER TABLE "Seat" ADD COLUMN     "reservationId" INTEGER,
ADD COLUMN     "status" "SeatStatus" NOT NULL DEFAULT 'AVAILABLE';

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Seat_seanceId_status_idx" ON "Seat"("seanceId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Seat_row_place_seanceId_key" ON "Seat"("row", "place", "seanceId");

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
