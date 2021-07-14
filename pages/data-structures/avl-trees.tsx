import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/AVLTrees";

const AVLTrees = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="AVL Trees"
        description={`
        A tree data structure with the self-balancing property 
        using balance difference between nodes and rotation of nodes.
        `}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default AVLTrees;
