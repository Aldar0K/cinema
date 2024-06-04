-- AlterTable
CREATE SEQUENCE seat_id_seq;
ALTER TABLE "Seat" ALTER COLUMN "id" SET DEFAULT nextval('seat_id_seq');
ALTER SEQUENCE seat_id_seq OWNED BY "Seat"."id";
