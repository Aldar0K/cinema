-- DropIndex
DROP INDEX "Seat_seanceId_status_idx";

-- CreateIndex
CREATE INDEX "Seat_seanceId_status_userId_idx" ON "Seat"("seanceId", "status", "userId");
