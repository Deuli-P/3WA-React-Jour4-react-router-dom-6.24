import Snippet from "../components/Snippet";

const HomePage = () => {
  const packagesSnippet = [{ name: "react" }, { name: "typescript" }];

  return (
    <main className="flex flex-col gap-5">
      <div className="text-center flex flex-col justify-center items-center gap-2 ">
        <h1 className="font-bold text-4xl">The NPM Registry</h1>
        <p className="w-[60%]">
          {" "}
          The package manager for JavaScript, Publish and install Javascript
          packages, mange dependencies, and more.
        </p>
      </div>
      <section className="flex flex-row justify-between gap-10 w-full px-4">
        {packagesSnippet.map((snippet) => (
          <Snippet key={`snippet-de-${snippet.name}`} name={snippet.name} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
