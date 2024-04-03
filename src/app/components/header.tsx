"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState<number>();

  const menu = [
    { path: "/aboutme", name: "About Me" },
    { path: "/work", name: "Work" },
    { path: "/project", name: "Project" },
    { path: "/blog", name: "Blog" },
  ];

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
      className={`w-full justify-center duration-300 opacity-95 ${
        scrollY && scrollY > 0 ? "bg-slate-900" : "bg-transparent"
      } fixed`}
    >
      <div
        className={`w-full h-16 flex justify-between items-center ${
          scrollY && scrollY > 0 ? "text-white" : "text-slate-700 border-b-2"
        } px-12`}
      >
        <div className="text-xl">
          <Link href="/">Lee Jooyeol</Link>
        </div>
        <section className="flex gap-20">
          {menu.map((menu, index) => {
            return (
              <nav key={index}>
                <Link href={menu.path}>{menu.name}</Link>
              </nav>
            );
          })}
        </section>
        <div>bla bla</div>
      </div>
    </div>
  );
}
