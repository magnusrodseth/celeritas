import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/data-structures/heaps";

const Heaps = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Heaps"
        description={`
        A tree data structure with two main properties: 
        The tree is complete, and does not violate the heap property.
        `}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Heaps;
