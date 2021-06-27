import React, { useEffect, useState } from "react";
import Markdown from "../../components/Markdown";
import Jumbotron from "../../components/Jumbotron";
import markdownContent from "../../markdown/LinkedLists";

const LinkedLists = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(markdownContent);
  }, []);

  return (
    <div>
      <Jumbotron
        title="Linked Lists"
        description={
          "Stores nodes sequentially. Each nodes holds a value and address of the next node in memory."
        }
      />

      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default LinkedLists;
