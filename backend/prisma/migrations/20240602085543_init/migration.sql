/*
  Warnings:

  - You are about to drop the column `place` on the `Seat` table. All the data in the column will be lost.
  - You are about to drop the column `row` on the `Seat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Seat" DROP COLUMN "place",
DROP COLUMN "row";
