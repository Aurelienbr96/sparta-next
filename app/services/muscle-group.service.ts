import { PrismaClient } from "@prisma/client";

class MuscleGroupService {
  constructor(public prisma: PrismaClient) {}

  async getAllMuscleGroup() {
    try {
      const muscleGroup = await this.prisma.muscleGroup.findMany({});
      return muscleGroup;
    } catch (error) {
      throw new Error("Failed to Muscle group.");
    }
  }
}

const instanceMuscleGroupService = new MuscleGroupService(new PrismaClient());

export default instanceMuscleGroupService;
