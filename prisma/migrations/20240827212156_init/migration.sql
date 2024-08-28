-- CreateTable
CREATE TABLE "Countdown" (
    "id" SERIAL NOT NULL,
    "timeRemaining" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Countdown_pkey" PRIMARY KEY ("id")
);
