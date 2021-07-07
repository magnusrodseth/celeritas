import Link from "next/link";
import React from "react";
import classNames from "../utils/classNames";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "font-mono text-sm w-screen mb-10",
        "flex justify-center items-center"
      )}
    >
      <Link href="https://github.com/magnusrodseth">
        <a
          className={classNames(
            "text-center transition duration-500 ease-in-out transform",
            "hover:-translate-y-1 hover:scale-105 text-indigo-400 hover:text-indigo-600 hover:underline"
          )}
        >
          Developed by Magnus Rødseth 💻
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
