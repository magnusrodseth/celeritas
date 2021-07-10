import React, { useReducer } from "react";
import Jumbotron from "../../components/Jumbotron";
import GridComponent from "../../components/pathfinding/GridComponent";
import PathfindingInformation from "../../components/pathfinding/PathfindingInformation";
import { DEFAULT_ROWS } from "../../constants";

const Dijkstra = () => {
  return (
    <div className="flex flex-col justify-center">
      <Jumbotron
        title="Dijkstra's Algorithm"
        description={`
        Id nostrum similique voluptatem delectus placeat.
        Eaque nisi quibusdam qui placeat placeat.`}
      />

      <PathfindingInformation />

      <GridComponent rows={DEFAULT_ROWS} />
    </div>
  );
};

export default Dijkstra;
