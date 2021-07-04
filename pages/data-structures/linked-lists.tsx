import React from "react";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/linkedLists";
import ExerciseCollection from "../../components/ExerciseCollection";

const LinkedLists = () => {

  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Linked Lists"
        description={
          "Stores nodes sequentially. Each nodes holds a value and address of the next node in memory."
        }
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default LinkedLists;
