import Link from "next/link";
import React from "react";
import classNames from "../utils/classNames";

const Index = () => {
  return (
    <div className="bg-yellow-400 opacity-90">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl tracking-wide text-gray-900 sm:text-4xl">
          <span className="block text-2xl my-4 tracking-wide font-light">
            Celeritas is a Latin word, translated as &quot;swiftness&quot; or
            &quot;speed&quot;. It is often given as the origin of the symbol c,
            the universal notation for the speed of light in a vacuum, as
            popularized in Albert Einstein&apos;s famous equation E = mc
            <sup>2</sup>.
          </span>
          <span className="block text-white font-extrabold">
            See something you like in the navigation bar?
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/data-structures/array">
              <a
                className={classNames(
                  "inline-flex items-center justify-center px-5 py-3 border border-transparent",
                  "text-base font-medium rounded-md text-gray-900 bg-yellow-300 hover:bg-yellow-200",
                  "transition transform duration-500 ease-in-out"
                )}
              >
                Link 1
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/data-structures/array">
              <a
                className={classNames(
                  "inline-flex items-center justify-center px-5 py-3 border border-transparent",
                  "text-base font-medium rounded-md text-yellow-400 bg-white hover:bg-gray-100",
                  "transition transform duration-500 ease-in-out"
                )}
              >
                Link 2
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
