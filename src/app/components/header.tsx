"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const menu = [
    { path: "/aboutme", name: "About Me" },
    { path: "/work", name: "Work" },
    { path: "/project", name: "Project" },
    { path: "/blog", name: "Blog" },
  ];

  const [scrollY, setScrollY] = useState<number>();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  };

  return (
    <div className={`w-full justify-center duration-300 opacity-95 fixed`}>
      <div
        className={`w-full h-16 flex justify-between items-center pl-12  pr-32`}
      >
        <div className="text-xl">
          <Link href="/">Lee Jooyeol</Link>
        </div>
        <section className="flex gap-20 divide-x-[1px] divide-slate-400">
          {menu.map((menu, index) => {
            return (
              <nav key={index} className="flex px-4 hover:bg-slate-800">
                <Link href={menu.path}>
                  <div className="text-xs text-slate-500 border-b-2 w-fit border-slate-500">
                    00{index + 1}
                  </div>
                  <div>{menu.name}</div>
                </Link>
              </nav>
            );
          })}
        </section>
      </div>
    </div>
  );
}
