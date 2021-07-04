import React from "react";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/queues";
import ExerciseCollection from "../../components/ExerciseCollection";

const Queues = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Queues"
        description={`
        Think of a queue in an airport. The first person in line gets served first. A first-in first-out (FIFO) data structure.`}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Queues;
