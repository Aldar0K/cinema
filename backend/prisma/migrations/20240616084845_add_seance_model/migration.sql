/*
  Warnings:

  - You are about to drop the column `movieId` on the `Seat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Seat" DROP CONSTRAINT "Seat_movieId_fkey";

-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "movieId",
ADD COLUMN     "seanceId" INTEGER;

-- CreateTable
CREATE TABLE "Seance" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Seance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seance_time_key" ON "Seance"("time");

-- AddForeignKey
ALTER TABLE "Seance" ADD CONSTRAINT "Seance_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_seanceId_fkey" FOREIGN KEY ("seanceId") REFERENCES "Seance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
