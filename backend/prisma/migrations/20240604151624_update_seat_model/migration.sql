-- AlterTable
ALTER TABLE "Seat" ALTER COLUMN "place" DROP DEFAULT,
ALTER COLUMN "row" DROP DEFAULT;
DROP SEQUENCE "Seat_place_seq";
DROP SEQUENCE "Seat_row_seq";