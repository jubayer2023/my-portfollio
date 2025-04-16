"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`link ${
        pathname === item.path
          ? "px-4 py-1 rounded-lg bg-green-600 font-thin transition"
          : ""
      } `}
      href={item.path}
    >
      {item.pageName}
    </Link>
  );
};

export default NavItem;
