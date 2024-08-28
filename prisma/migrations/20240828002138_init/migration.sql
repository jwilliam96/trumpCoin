/*
  Warnings:

  - The primary key for the `Countdown` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `startTime` on the `Countdown` table. All the data in the column will be lost.
  - You are about to drop the column `timeRemaining` on the `Countdown` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Countdown` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Countdown" DROP CONSTRAINT "Countdown_pkey",
DROP COLUMN "startTime",
DROP COLUMN "timeRemaining",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" SET DEFAULT 'counter1',
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Countdown_pkey" PRIMARY KEY ("id");
