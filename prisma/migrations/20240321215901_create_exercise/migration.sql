-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('Chest', 'Back', 'Quadriceps', 'Hamstring', 'Calves', 'UpperBackNeck', 'UpperBack', 'Shoulders', 'Biceps', 'Triceps', 'Forearm', 'Glutes', 'LowerAbs', 'UpperAbs', 'LowerBack', 'InnerThighs', 'OuterThighs');

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "muscleTargeted" "MuscleGroup" NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Exercise_userId_idx" ON "Exercise"("userId");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
