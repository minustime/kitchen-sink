import * as React from 'react';
import { Provider } from 'mobx-react';

import UploadStore from '../../stores/UploadStore';

const App = () => {
  return (
    <Provider uploadStore={new UploadStore()}>
      <h1>Hello</h1>
    </Provider>
  );
};

export default App;
