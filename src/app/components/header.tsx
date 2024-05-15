"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const menu = [
    { path: "/aboutme", name: "About Me" },
    { path: "/work", name: "Work" },
    { path: "/project", name: "Project" },
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
    <div
      className={`w-full justify-center duration-300 backdrop-blur-sm fixed`}
    >
      <div
        className={`w-full h-16 flex justify-between items-center pl-12 pr-32`}
      >
        <div className="text-xl">
          <Link href="/">Lee Jooyeol</Link>
        </div>
        <section className="flex divide-x-[1px] divide-slate-400">
          {menu.map((menu, index) => {
            return (
              <Link
                className="flex px-4 pr-20 hover:bg-slate-100 duration-100"
                key={index}
                href={menu.path}
              >
                <nav>
                  <div className="text-xs text-slate-500 border-b-2 w-fit border-slate-500">
                    00{index + 1}
                  </div>
                  <div>{menu.name}</div>
                </nav>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
