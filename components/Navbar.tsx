import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import classNames from "../utils/classNames";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import navigation from "../utils/navigation";
import Dropdown from "./Dropdown";
import DropdownChild from "./DropdownChild";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="font-mono text-center">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-evenly mt-2 mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-evenly p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-evenly sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* Logo goes here */}
                  <Link href="/" passHref>
                    <h1
                      className={classNames(
                        "text-3xl transition duration-500 ease-in-out transform",
                        "hover:-translate-y-1 cursor-pointer"
                      )}
                    >
                      <span className="text-yellow-300 hover:text-yellow-400">
                        ⚡️
                      </span>{" "}
                      Celeritas
                    </h1>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {Object.keys(navigation).map((key, index) => (
                      <Dropdown title={key} key={index}>
                        {navigation[key].map((child, index) => (
                          <DropdownChild child={child} key={index} />
                        ))}
                      </Dropdown>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.keys(navigation).map((key, index) => (
                <Dropdown title={key} key={index}>
                  {navigation[key].map((child, index) => (
                    <DropdownChild child={child} key={index} />
                  ))}
                </Dropdown>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
