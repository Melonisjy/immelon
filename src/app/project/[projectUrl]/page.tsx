"use client";

import { useParams } from "next/navigation";

const Detail = () => {
  const project = useParams();

  return (
    <section className="h-full mt-24 w-full bg-slate-400 flex justify-center items-center">
      <h1 className="uppercase text-7xl font-bold text-slate-700">
        {project.projectUrl}
      </h1>
    </section>
  );
};

export default Detail;
