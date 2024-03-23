export default function Footer() {
  return (
    <section className="flex flex-col m-4 p-12 gap-12 bg-slate-200 rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-20">
          <div className="text-2xl">Lee Jooyeol</div>
          <div className="flex flex-row gap-4">
            <div>Home</div>
            <div>About</div>
            <div>Work</div>
            <div>Project</div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div>icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
      <div className="text-end">
        © 2024 Lee Joo yeol. All rights reserved. Licensing
      </div>
    </section>
  );
}
