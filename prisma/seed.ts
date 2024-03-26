import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const userData = [
  {
    email: "aurelien123@gmail.com",
    password: "password123",
  },
];

const muscleGroup = [
  { name: "Chest" },
  { name: "Back" },
  { name: "Quadriceps" },
  { name: "Hamstring" },
  { name: "Calves" },
  { name: "Upper Back Neck" },
  { name: "Upper Back" },
  { name: "Shoulders" },
  { name: "Biceps" },
  { name: "Triceps" },
  { name: "Forearm" },
  { name: "Glutes" },
  { name: "Lower Abs" },
  { name: "Upper Abs" },
  { name: "Lower Back" },
  { name: "Inner Thighs" },
  { name: "Out thighs" },
];

const exercises = [
  {
    name: "Bench Press",
    description: "A compound exercise that targets the chest, shoulders, and triceps.",
    muscleGroupId: 1,
  },
  {
    name: "Deadlift",
    description:
      "A weight lifting exercise where one lifts a loaded barbell off the ground to the level of the hips, then places it back on the ground.",
    muscleGroupId: 15,
  },
  {
    name: "Squat",
    description:
      "A compound, full body exercise that trains primarily the muscles of the thighs, hips and buttocks, quad, hamstrings, as well as strengthening the bones, ligaments and insertion of the tendons throughout the lower body.",
    muscleGroupId: 3,
  },
  {
    name: "Pull-Up",
    description:
      "An upper-body strength exercise. The pull-up is performed by lifting yourself up to the bar using your arms.",
    muscleGroupId: 7,
  },
  {
    name: "Shoulder Press",
    description:
      "A form of overhead press for the shoulders. The person lifts a weight overhead to full arm extension, traditionally starting at the shoulders.",
    muscleGroupId: 8,
  },
  {
    name: "Bicep Curl",
    description: "A weight-training exercise that targets the biceps brachii muscle.",
    muscleGroupId: 9,
  },
  {
    name: "Tricep Dips",
    description:
      "An upper-body strength exercise. The triceps are trained by moving the body up and down via the arms.",
    muscleGroupId: 10,
  },
  {
    name: "Leg Press",
    description:
      "A weight training exercise in which the individual pushes a weight or resistance away from them using their legs.",
    muscleGroupId: 3,
  },
  {
    name: "Calf Raises",
    description:
      "An exercise performed by raising the heels from the ground while the toes and balls of the feet remain stationary.",
    muscleGroupId: 5,
  },
  {
    name: "Plank",
    description:
      "An isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
    muscleGroupId: 13,
  },
];

async function seedExercise() {
  for (const ex of exercises) {
    const exercise = await prisma.exercise.create({ data: ex });
    console.log(`Created exercise with id: ${exercise.id}`);
  }
}

async function seedUser() {
  for (const u of userData) {
    const hashedPassword = await bcrypt.hash(u.password, 10);
    const user = await prisma.user.create({
      data: {
        email: u.email,
        password: hashedPassword,
      },
    });
    console.log(`Created user with id: ${user.id}`);
  }
}

async function main() {
  console.log(`Start seeding ...`);

  await seedUser();
  /* await seedExercise(); */

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
