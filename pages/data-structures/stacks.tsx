import { Menu } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import Jumbotron from "../../components/Jumbotron";
import Markdown from "../../components/Markdown";
import Stack from "../../markdown/stacks/Stack";
import BalancedExpression from "../../markdown/stacks/BalancedExpression";
import ReverseString from "../../markdown/stacks/ReverseString";
import classNames from "../../utils/classNames";

interface IExercise {
  name: string;
  description: string;
  markdown: string;
}

const exercises = [
  {
    name: "Stack from scratch",
    description:
      "An implementation of a stack with the main functionality, including push, pop, peek and is_empty.",
    markdown: Stack,
  },
  {
    name: "Balanced expression",
    description: `
    A method which checks if a string is balanced using a simple stack.
    A string is balanced if the types of brackets line up.`,
    markdown: BalancedExpression,
  },
  {
    name: "Reverse string",
    description: `A method which simply reverses a string using a stack.`,
    markdown: ReverseString,
  },
];

const Stacks = () => {
  const [exercise, setExercise] = useState<IExercise | null>(null);

  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Stacks"
        description={`
        Think of a collection of books stacked on top of eachother.
        We can only inspect or remove the top book. 
        In order to empty the stack, we must pop the top book of.`}
      />

      <div className={classNames("mx-auto my-8")}>
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

      {exercise ? (
        <div className="mx-10 my-5">
          <h2 className="text-3xl sm:text-4xl">
            <span className="block text-gray-900 font-mono">
              {exercise.name}
            </span>
          </h2>

          <p className="ml-12 mt-2 text-lg tracking-wide">
            {exercise.description}
          </p>
          <Markdown>{exercise.markdown}</Markdown>
        </div>
      ) : null}
    </div>
  );
};

export default Stacks;
