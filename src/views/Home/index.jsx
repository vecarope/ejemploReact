import * as Landing from '../../components/Landing';

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <Landing.Hero />
      <Landing.HowWeWork />
      <Landing.Features />
      <Landing.Contat />
    </main>
  );
};

export default HomePage;
