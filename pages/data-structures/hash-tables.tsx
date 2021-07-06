import React from "react";
import ExerciseCollection from "../../components/ExerciseCollection";
import Jumbotron from "../../components/Jumbotron";
import exercises from "../../utils/exercises/hashTables";

const HashTables = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Hash Tables"
        description={`
        The key in a key-value pair is hashed to find the key-value pair's place in memory.
        The key-value pairs are stored deterministically and nonsequential in memory.`}
      />

      <ExerciseCollection exercises={exercises} />
    </div>
  );
};

export default HashTables;
