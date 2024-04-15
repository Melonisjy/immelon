// react-icons
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { HiMail } from "react-icons/hi";

import htmlTag from "../assets/tag.png";

import Link from "next/link";
import Image from "next/image";

interface myInfoProps {
  name: string;
  link: string;
  icon: JSX.Element;
}

export const myInfoLink: myInfoProps[] = [
  {
    name: "github",
    link: "https://github.com/Melonisjy",
    icon: <FaGithub size={20} className="fill-slate-800 hover:opacity-60" />,
  },
  {
    name: "velog",
    link: "https://velog.io/@meloncoder/posts",
    icon: <SiVelog size={20} className="fill-slate-800 hover:opacity-60" />,
  },
  {
    name: "gmail",
    link: "mailto:dhy2458@gmail.com",
    icon: <HiMail size={26} className="fill-slate-800 hover:opacity-60" />,
  },
];

export default function Main() {
  return (
    <div className="h-full pt-44 flex justify-center flex-col gap-6 items-center">
      <div className="bg-slate-300 p-3 rounded-xl tracking-tighter text-xl">
        Hello! I’m Melon, and I’m...
      </div>
      <div className="text-5xl mt-4 text-pretty text-center tracking-tight leading-snug">
        A Programmer and a Frontend Developer <br /> with Blockchain.
      </div>
      <Image
        src={htmlTag}
        alt="htmlTag"
        className="absolute opacity-10 -z-50 object-fill"
      />
      <div className="text-lg tracking-wider text-center leading-5">
        Webflow development tailored for design-focused companies,
        <br /> emphasizing meticulous attention to detail and unwavering
        passion.
      </div>
      <section className="flex gap-8 items-center mt-20 border-solid border-2 border-slate-700 p-2 rounded-lg">
        {myInfoLink.map((v, i) => {
          return (
            <Link key={i} href={v.link}>
              {v.icon}
            </Link>
          );
        })}
      </section>
    </div>
  );
}
