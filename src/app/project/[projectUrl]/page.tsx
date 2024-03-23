interface DetailProps {
  params: {
    projectUrl: string;
  };
}
const Detail = (props: DetailProps) => {
  const projectName: string = props.params.projectUrl;

  return (
    <section className="h-full w-full bg-slate-400 flex justify-center">
      <div className="w-full flex justify-around">
        <section></section>
        <h1 className="uppercase text-7xl font-bold text-slate-700 flex justify-center">
          {projectName}
        </h1>
      </div>
    </section>
  );
};

export default Detail;
