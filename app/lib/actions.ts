"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { ZodError, z } from "zod";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import instanceExercisesService from "../services/exercises.service";

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  muscleGroupId: z.number(),
});

const CreatExercise = FormSchema.omit({ id: true });

function transformZodError(errors: ZodError) {
  const result: any = {};
  errors.issues.forEach((error) => {
    const key = error.path[0];
    if (!result[key]) {
      result[key] = { message: error.message };
    }
  });
  return result;
}

export async function creatExercise(prevState: string | undefined, formData: FormData) {
  noStore();
  try {
    const parsedData = CreatExercise.parse({
      name: formData.get("name"),
      description: formData.get("description"),
      muscleGroupId: Number(formData.get("muscleGroupId")),
    });
    await instanceExercisesService.creatExercise(parsedData);
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    if (error instanceof ZodError) {
      return transformZodError(error);
    }
    return "Something went wrong.";
  }
}
