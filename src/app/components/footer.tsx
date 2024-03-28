import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col m-4 p-12 gap-12 bg-slate-200 rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-20">
          <div className="text-2xl">Lee Jooyeol</div>
          <div className="flex flex-row gap-4">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/aboutme">About Me</Link>
            </div>
            <div>
              <Link href="/work">Work</Link>
            </div>
            <div>
              <Link href="/project">Project</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
      <div className="text-end">
        © 2024 Lee Jooyeol. All rights reserved. Licensing
      </div>
    </section>
  );
}
