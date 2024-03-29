"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
      className={`w-full justify-center ${
        scrollY && scrollY > 0 ? "bg-slate-800" : "bg-transparent"
      } fixed`}
    >
      <div
        className={`w-full h-16 flex justify-between items-center ${
          scrollY && scrollY > 0 ? "text-white" : "text-slate-700"
        } px-12`}
      >
        <div className="text-xl">
          <Link href="/">Lee Jooyeol</Link>
        </div>
        <section className="flex gap-20">
          <nav>
            <Link href="/aboutme">About Me</Link>
          </nav>
          <nav>
            <Link href="/work">Work</Link>
          </nav>
          <nav>
            <Link href="/project">Project</Link>
          </nav>
          <nav>
            <Link href="/blog">Blog</Link>
          </nav>
        </section>
        <div>bla bla</div>
      </div>
    </div>
  );
}
