import React from "react";
import Jumbotron from "../../components/Jumbotron";

const LinkedLists = () => {
  return (
    <div>
      <Jumbotron
        title="Linked Lists"
        description={
          "Stores nodes sequentially. Each nodes holds a value and address of the next node in memory."
        }
      />
    </div>
  );
};

export default LinkedLists;
