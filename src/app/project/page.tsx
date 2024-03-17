"use client";

import React from "react";

export interface IProject {
  title: string;
  contents: string;
  onClick: () => void;
}

function Project() {
  const projectList: IProject[] = [
    {
      title: "INSURSAND",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
    },
    {
      title: "P2D (Play To Donate)",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
    },
    {
      title: "INSURSAND",
      contents:
        "INSURSAND revolutionizes access to insurance in DeFi with two offerings: asset and staking insurance. Operating on a test network, we secure crypto assets, transforming the DeFi insurance landscape, and empowering users to explore the digital economy confidently.",
      onClick: () => console.log("sss"),
    },
  ];

  const _renderProject = (project: IProject, index: number) => (
    <article key={index} className="rounded-lg mt-28 mx-4 bg-slate-400">
      <div className="py-20 pl-4 w-2/5 flex flex-col gap-12 justify-between">
        <div className="text-4xl text-slate-800">{project.title}</div>
        <div className="text-slate-600">{project.contents}</div>
        <button
          onClick={project.onClick}
          className="flex justify-end w-fit text-slate-800"
        >
          {`More about project ->`}
        </button>
      </div>
      <div></div>
    </article>
  );

  return (
    <div>
      <section className="h-80 flex justify-center items-center">
        <h1 className="text-7xl font-bold text-slate-700">
          Explore my projects
        </h1>
      </section>
      <section className="grid grid-cols-1">
        {projectList.map((project, index) => _renderProject(project, index))}
      </section>
    </div>
  );
}
export default Project;
