import React from "react";
import { IExercise } from "../types/types";
import Markdown from "./Markdown";

interface ExerciseProps {
  exercise: IExercise;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise }: ExerciseProps) => {
  return (
    <div className="m-10">
      <h2 className="text-3xl sm:text-4xl">
        <span className="block text-gray-900 font-mono">{exercise.name}</span>
      </h2>

      <p className="ml-12 mt-2 text-lg tracking-wide">{exercise.description}</p>
      <Markdown>{exercise.markdown}</Markdown>
    </div>
  );
};

export default Exercise;
