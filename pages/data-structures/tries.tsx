import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/tries";

const Tries = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Tries"
        description={`
        A tree data structure where each node can relate to several other nodes.
        Perfect for implementing autocompletion.
        `}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Tries;
