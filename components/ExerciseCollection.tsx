import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { IExercise } from "../types/types";
import classNames from "../utils/classNames";
import Dropdown from "./Dropdown";
import Exercise from "./Exercise";

interface ExerciseCollectionProps {
  exercises: IExercise[];
}

const ExerciseCollection: React.FC<ExerciseCollectionProps> = ({
  exercises,
}: ExerciseCollectionProps) => {
  const [exercise, setExercise] = useState<IExercise | null>(null);

  return (
    <div className="flex flex-col justify-center">
      {/* No exercises */}
      {exercises.length === 0 ? (
        <h1 className="text-4xl font-light">No exercises could be found...</h1>
      ) : null}

      {/* A single exercise */}
      <div className={classNames("my-8")}>
        {exercises.length === 1 ? (
          <div className="mx-left">
            <Exercise exercise={exercises[0]} />
          </div>
        ) : null}

        {/* Multiple exercises */}
        {exercises.length > 1 ? (
          <div className="w-screen h-auto flex justify-center items-center">
            <Dropdown title="Exercises">
              {exercises.map((exercise, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    setExercise(exercise);
                  }}
                >
                  {({ active }) => (
                    <a
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {exercise.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Dropdown>
          </div>
        ) : null}
      </div>

      {/* exercise will only be defined if user selects it from dropdown. */}
      {exercise ? <Exercise exercise={exercise} /> : null}
    </div>
  );
};

export default ExerciseCollection;
