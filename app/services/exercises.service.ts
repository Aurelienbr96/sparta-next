import { PrismaClient } from "@prisma/client";

class ExercisesService {
  constructor(public prisma: PrismaClient) {}

  async getAllExercises(muscleGroupId?: string) {
    try {
      if (muscleGroupId) {
        const exercises = await this.prisma.exercise.findMany({
          where: {
            muscleGroupId: Number(muscleGroupId),
          },
        });
        return exercises;
      } else {
        const exercises = await this.prisma.exercise.findMany({});
        return exercises;
      }
    } catch (error) {
      throw new Error("Failed to fetch exercise.");
    }
  }

  async creatExercise({
    name,
    description,
    muscleGroupId,
  }: {
    name: string;
    description: string;
    muscleGroupId: number;
  }) {
    try {
      const exercise = await this.prisma.exercise.create({ data: { name, description, muscleGroupId } });
      return exercise;
    } catch (error) {
      throw new Error("Failed to create exercise");
    }
  }
}

const instanceExercisesService = new ExercisesService(new PrismaClient());

export default instanceExercisesService;
