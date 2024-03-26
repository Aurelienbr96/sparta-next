"use client";
import { creatExercise } from "@/app/lib/actions";
import { Button } from "@/app/ui/buttons/Button";
import { ErrorBoundary } from "react-error-boundary";
import { Input } from "@/app/ui/form";
import { useFormState, useFormStatus } from "react-dom";
import { useRef } from "react";

type Props = {
  muscleGroup: {
    id: number;
    name: string;
    description: string | null;
  }[];
};

export const AddExerciseForm = ({ muscleGroup }: Props) => {
  const [errorMessage, dispatch] = useFormState(creatExercise, undefined);
  return (
    <ErrorBoundary fallback={<p>There was an error while submitting the form</p>}>
      <form action={dispatch} className="flex flex-col mt-6 gap-4 w-full items-center">
        <Input name="name" id="name" placeholder="name" />
        {!!errorMessage?.name?.message && <p>{errorMessage?.name?.message}</p>}
        <Input name="description" id="description" placeholder="description" />
        {!!errorMessage?.description?.message && <p>{errorMessage?.description?.message}</p>}
        <select
          id="muscleGroupId"
          name="muscleGroupId"
          className="peer block cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select a muscle for your exercise
          </option>
          {muscleGroup.map((muscle) => (
            <option key={muscle.id} value={muscle.id}>
              {muscle.name}
            </option>
          ))}
        </select>
        {/* {!!errorMessage && <p>{errorMessage}</p>} */}
        <CreateExerciseButton />
      </form>
    </ErrorBoundary>
  );
};

const CreateExerciseButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="px-4">
      {pending ? "Loading..." : "Add an exercise"}
    </Button>
  );
};
