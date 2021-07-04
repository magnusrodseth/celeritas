import React from "react";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/stacks";
import ExerciseCollection from "../../components/ExerciseCollection";

const Stacks = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Stacks"
        description={`
        Think of a collection of books stacked on top of eachother.
        We can only inspect or remove the top book. 
        In order to empty the stack, we must pop the top book of. A last-in first-out (LIFO) data structure.`}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Stacks;
