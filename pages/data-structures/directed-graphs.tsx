import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/graphs";

const DirectedGraphs = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Directed Graphs"
        description={`
        A data structure for modeling relationships between objects.
        No limitations on how many edges a node can have.
        Edges have a start and end node, and are thus directed.
        `}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default DirectedGraphs;
