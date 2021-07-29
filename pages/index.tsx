import Link from "next/link";
import React from "react";
import classNames from "../utils/classNames";

const Index = () => {
  return (
    <div className="bg-yellow-400 opacity-90">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl tracking-wide text-gray-900 sm:text-4xl">
          <span className="block text-md my-4 font-bold tracking-wide">
            Categorizing and visualizing the world of data structures and
            algorithms.
          </span>
          <span className="block text-2xl my-4 tracking-wide font-light">
            The word &quot;celeritas&quot; is of Latin origin, translated as
            &quot;swiftness&quot; or &quot;speed&quot;. It is often given as the
            origin of the symbol <em>c</em>, the universal notation for the
            speed of light in a vacuum, as popularized in Albert Einstein&apos;s
            famous equation{" "}
            <em>
              E = mc
              <sup>2</sup>
            </em>
            .
          </span>
          <span className="block text-white font-extrabold">
            See something you like in the navigation bar?
          </span>
        </h2>
        <div className="m-4 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/sorting/bubble-sort">
              <a
                className={classNames(
                  "inline-flex items-center justify-center px-5 py-3 border border-transparent",
                  "text-base font-medium rounded-md text-gray-900 bg-yellow-200 hover:bg-white",
                  "transition transform duration-500 ease-in-out"
                )}
              >
                Bubble Sort
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/pathfinding/dijkstra">
              <a
                className={classNames(
                  "inline-flex items-center justify-center px-5 py-3 border border-transparent",
                  "text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-white",
                  "hover:text-gray-900",
                  "transition transform duration-500 ease-in-out"
                )}
              >
                Dijkstra&apos;s Algorithm
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
