const App = () => {
  return (
    <div className='App'>
      <Marquee />
      <h1>GDG ALGECIRAS</h1>
      <h2>web en construcción</h2>
      <Marquee direction='right' />
    </div>
  );
};

const Marquee = ({
  direction,
}: {
  direction?: 'left' | 'right' | 'up' | 'down';
}) => {
  return (
    <div
      className='custom-width'
      dangerouslySetInnerHTML={{
        __html: `<marquee behavior=alternate direction=${direction} >
        gdg algeciras vaya comunidad más guapa los desarrolladores son unos
        mákinas sobre todo el oscar y el ricardo vaya cracks</marquee>`,
      }}
    />
  );
};

export default App;
