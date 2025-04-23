import Header from "./_components/Header";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          edit and previews
        </div>
      </div>
    </div>
  );
};
export default Home;
