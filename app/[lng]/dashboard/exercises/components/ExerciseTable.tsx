import instanceExercisesService from "@/app/services/exercises.service";

export default async function ExerciseTable({ query }: { query?: string }) {
  const exercises = await instanceExercisesService.getAllExercises(query);
  return (
    <div className="flex flex-col gap-4 text-white mt-6">
      {exercises.map((exercise) => (
        <div key={exercise.id} className="flex gap-4">
          <p className="flex-1">{exercise.name}</p>
          <p className="flex-3 text-right">{exercise.description}</p>
        </div>
      ))}
    </div>
  );
}
