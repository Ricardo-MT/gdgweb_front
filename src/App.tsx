const App = ({ app }: { app?: string }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Marquee />
      <h1>GDG ALGECIRAS</h1>
      <h2>web en construcción</h2>
      <button type='button'></button>
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
      style={{ width: 600 }}
      dangerouslySetInnerHTML={{
        __html: `<marquee behavior=alternate direction=${direction} >
        gdg algeciras vaya comunidad más guapa los desarrolladores son unos
        mákinas sobre todo el oscar y el ricardo vaya cracks</marquee>`,
      }}
    ></div>
  );
};

export default App;
