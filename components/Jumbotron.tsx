import React from "react";

interface JumbotronProps {
  title: string;
  description?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, description }) => {
  return (
    <div className="bg-yellow-400 opacity-90">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl tracking-wide text-gray-900 sm:text-4xl">
          <span className="block text-white font-extrabold">{title}</span>
        </h2>
        {description ? (
          <div className="px-8 w-3/4">
            <h4 className="tracking-wide text-gray-900 sm:text-4xl">
              <span className="block text-md text-white font-light">
                {description}
              </span>
            </h4>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Jumbotron;
