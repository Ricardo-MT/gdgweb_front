import Marquee from 'src/app/components/Marquee';

const HomePage = () => {
  return (
    <div className='App'>
      <Marquee />
      <h1>GDG ALGECIRAS</h1>
      <h2>web en construcción</h2>
      <Marquee direction='right' />
    </div>
  );
};

export default HomePage;
