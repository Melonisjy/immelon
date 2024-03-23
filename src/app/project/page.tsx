"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const INSURSAND_IMAGE = "/image/projects/insursand2.png";

export interface IProject {
  url: string;
  title: string;
  contents: string;
  onClick: () => void;
  imgSrc: string;
}

function Project() {
  const projectList: IProject[] = [
    {
      url: "insursand",
      title: "INSURSAND",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
      imgSrc: INSURSAND_IMAGE,
    },
    {
      url: "p2d",
      title: "P2D (Play To Donate)",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
      imgSrc: INSURSAND_IMAGE,
    },
    {
      url: "insursand",
      title: "INSURSAND",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
      imgSrc: INSURSAND_IMAGE,
    },
  ];

  const _renderProject = (project: IProject, index: number) => (
    <article key={index} className="rounded-lg mt-28 mx-4 bg-slate-400">
      <div className="flex justify-around px-12">
        <div className="py-20 px-4 w-2/5 flex flex-col gap-12 justify-between">
          <div className="text-4xl text-slate-800">{project.title}</div>
          <div className="text-slate-600">{project.contents}</div>
          <Link href={`/project/${project.url}`}>
            <button
              onClick={project.onClick}
              className="flex justify-end w-fit text-slate-800"
            >
              {`More about project ->`}
            </button>
          </Link>
        </div>
        <section className="flex items-center">
          <Image
            className="rounded-xl shadow-2xl shadow-blue-200 ring-2 ring-slate-200"
            src={project.imgSrc}
            alt="img"
            width={500}
            height={200}
          />
        </section>
      </div>
    </article>
  );

  return (
    <div>
      <section className="h-80 flex justify-center items-center">
        <h1 className="text-7xl font-bold text-slate-700">
          Explore my projects
        </h1>
      </section>
      <section className="grid grid-cols-1 mb-4">
        {projectList.map((project, index) => _renderProject(project, index))}
      </section>
    </div>
  );
}
export default Project;
