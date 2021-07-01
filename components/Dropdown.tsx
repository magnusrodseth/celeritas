/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "../utils/classNames";
import { NavigationChild } from "../utils/navigation";
import Link from "next/link";

interface DropdownProps {
  title: string;
  children: any;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left z-50")}
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                "focus:ring-yellow-300",
                "focus:outline-none focus:ring-2 focus:border-transparent",
                "inline-flex justify-center w-full rounded-md border border-gray-300",
                "shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50",
                "focus:outline-none font-mono"
              )}
            >
              {title}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1 cursor-pointer">{children}</div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
