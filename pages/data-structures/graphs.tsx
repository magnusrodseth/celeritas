import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/graphs";

const Graphs = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Graphs"
        description={`
        A data structure for modeling relationships between objects.
        No limitations on how many edges a node can have.
        Nodes are connected by edges, and can be either directed or undirected, 
        and either weighted or unweighted.
        `}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Graphs;
