import { PropsWithChildren } from 'react';

function Error({ children }: PropsWithChildren) {
  return (
    <div className="center">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          alignItems: 'center'
        }}
      >
        <> {children}</>
      </div>
    </div>
  );
}

export default Error;
