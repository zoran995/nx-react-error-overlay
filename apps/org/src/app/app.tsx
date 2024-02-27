// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';

import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    setTimeout(() => {
      throw new Error('test');
    }, 1000);
  }, []);
  return (
    <div>
      <NxWelcome title="org" />
    </div>
  );
}

export default App;
