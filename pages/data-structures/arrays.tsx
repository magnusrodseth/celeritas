import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Markdown from "../../components/Markdown";
import markdownContent from "../../markdown/Arrays";

const Arrays = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(markdownContent);
  }, []);

  return (
    <div>
      <Jumbotron
        title="Arrays"
        description={
          "Stores items sequentially. Great when we know how many items we have."
        }
      />

      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Arrays;
