import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <header className="w-full h-16 flex justify-between items-center border-b-2 mx-12">
        <div className="text-xl">Lee Joo Yeol</div>
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
      </header>
    </div>
  );
}
