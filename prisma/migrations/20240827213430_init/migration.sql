/*
  Warnings:

  - The primary key for the `Countdown` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Countdown" DROP CONSTRAINT "Countdown_pkey",
ALTER COLUMN "id" SET DEFAULT 'contador1',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Countdown_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Countdown_id_seq";
