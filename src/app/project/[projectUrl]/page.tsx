interface DetailProps {
  params: {
    projectUrl: string;
  };
}

const Detail = (props: DetailProps) => {
  const projectName: string = props.params.projectUrl;

  return (
    <section className="pt-16 h-full">
      <div className="w-full min-h-screen flex justify-around bg-slate-400">
        <section></section>
        <section>
          <h1 className="uppercase text-7xl font-bold text-slate-700 flex justify-center">
            {projectName}
          </h1>
        </section>
      </div>
    </section>
  );
};

export default Detail;
