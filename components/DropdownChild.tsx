import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import classNames from "../utils/classNames";
import { NavigationChild } from "../utils/navigation";

interface DropdownChildProps {
  child: NavigationChild;
}

const DropdownChild = ({ child }: DropdownChildProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={child.href}>
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {child.name}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};

export default DropdownChild;
