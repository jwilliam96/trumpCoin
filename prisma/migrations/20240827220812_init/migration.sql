/*
  Warnings:

  - The primary key for the `Countdown` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Countdown` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Countdown" DROP CONSTRAINT "Countdown_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL DEFAULT 1,
ADD CONSTRAINT "Countdown_pkey" PRIMARY KEY ("id");
