import type React from 'react';

const Marquee: React.FC<Props> = ({ direction }) => {
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

type Props = {
  direction?: 'left' | 'right' | 'up' | 'down';
};

Marquee.defaultProps = {
  direction: 'left',
};

export default Marquee;
