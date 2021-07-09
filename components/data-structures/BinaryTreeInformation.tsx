import React from "react";

const BinaryTreeInformation = ({}) => {
  return (
    <div className="my-4 w-7/12 flex flex-col space-y-4">
      <h1 className="text-center text-2xl font-mono">Binary Search Tree Visualization</h1>

      <p>
        What you see below is a <strong>binary search tree</strong>, created
        from an randomly generated array. This implementation uses{" "}
        <strong>breadth-first traversal</strong> of the tree. In short, this
        means that we visit all nodes at the current step before moving to the
        next step.
      </p>

      <p>
        Take a look at the randomly generated array. Notice how this structure
        allows us to do the following:{" "}
        <strong>each comparison skips about half of the remaining tree</strong>,
        so the lookup runs in logarithmic time complexity. This is much better
        than the linear time required to find items by key in an (unsorted)
        array, but slower than the corresponding operations on hash tables.
      </p>

      <p>My apologies for the low resolution on the canvas.</p>
    </div>
  );
};

export default BinaryTreeInformation;
