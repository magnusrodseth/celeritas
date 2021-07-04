import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/arrays";

const Arrays = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Arrays"
        description={
          "Stores items sequentially. Great when we know how many items we have."
        }
      />


      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default Arrays;
