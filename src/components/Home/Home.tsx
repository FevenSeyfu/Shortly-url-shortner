import Hero from "./Hero";
import Nav from "./Nav";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
