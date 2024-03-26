import instanceExercisesService from "@/app/services/exercises.service";
import { Tag } from "./components/Tag";
import instanceMuscleGroupService from "@/app/services/muscle-group.service";
import { Suspense } from "react";
import ExerciseTable from "./components/ExerciseTable";
import { AddExerciseForm } from "./components/AddExerciseForm";

const Exercise = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const muscleGroup = await instanceMuscleGroupService.getAllMuscleGroup();

  return (
    <div>
      exercises
      <div className="flex gap-4 flex-wrap">
        {muscleGroup.map((tag) => (
          <Tag key={tag.id} tag={tag.id}>
            {tag.name}
          </Tag>
        ))}
      </div>
      <Suspense key={searchParams?.query} fallback={<p>Loading...</p>}>
        <ExerciseTable query={searchParams?.query} />
      </Suspense>
      <AddExerciseForm muscleGroup={muscleGroup} />
    </div>
  );
};

export default Exercise;
