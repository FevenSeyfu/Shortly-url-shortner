import Hero from "./Hero";
import Nav from "./Nav";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full pb-24 md:pb-12">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
