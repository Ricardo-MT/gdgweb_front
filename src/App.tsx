import type React from 'react';

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

const Marquee: React.FC<{
  direction?: 'left' | 'right' | 'up' | 'down';
}> = ({ direction }) => {
  return (
    <div
      className='custom-width'
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `<marquee behavior=alternate direction=${direction} >
        gdg algeciras vaya comunidad más guapa los desarrolladores son unos
        mákinas sobre todo el oscar y el ricardo vaya cracks</marquee>`,
      }}
    />
  );
};

Marquee.defaultProps = {
  direction: 'left',
};

export default App;
