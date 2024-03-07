import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <header className="w-4/5 h-12 flex gap-20 justify-center items-center border-b-2">
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
      </header>
    </div>
  );
}
